import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { TermsConditions } from 'src/app/core/interfaces/termsCondition';
import { DialogData } from 'src/app/core/interfaces/ui/dialogData';
import {
  RegistrationUser,
  RegistrationUserData,
} from 'src/app/core/interfaces/registrationPostData';
import { ValueDescription } from 'src/app/core/interfaces/valueDescription';
import { MetadataService } from 'src/app/core/services/metadata.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AcceptDeclineDialogComponent } from 'src/app/modules/shared/components/accept-decline-dialog/accept-decline-dialog.component';
import { RegistrationService } from '../../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Utils } from 'src/app/core/utils/utils';
import { AppConstants } from 'src/app/core/constants/app.constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: AppConstants.IN_OUT_ANIMATION,
})
export class RegistrationComponent implements OnInit {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: AppConstants.PASSWORD_FORM_CONTROL(AppConstants.PASSWORD_REGEX),
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    citizenship: ['', [Validators.required]],
    termsConditions: ['', [Validators.requiredTrue]],
    privacyPolicy: ['', [Validators.requiredTrue]],
    subscription: ['', []],
  });

  loginPath = `/${RoutingConstants.LOGIN}`;
  forgotPasswordPath = `/${RoutingConstants.FORGOT_PASSWORD}`;
  isOpen = false;
  genders = new Observable<ValueDescription[]>();
  citizenships = new Observable<ValueDescription[]>();
  termsConditions = '';
  privacyPolicy = '';
  showPasswordPolicy = false;
  passwordValid = Utils.getPasswordValidity;

  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 16));
  minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 85));

  hidePassword = true;
  passwordVisibilityBtnClicked = false;

  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService,
    private metadataService: MetadataService,
    public dialog: MatDialog,
    private registerService: RegistrationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(this.minDate);
  }

  ngOnInit(): void {
    this.genders = this.metadataService.getValueDescriptionList('genders');
    this.citizenships =
      this.metadataService.getValueDescriptionList('citizenships');
    this.metadataService
      .getTermsConditions()
      .subscribe((res) => (this.termsConditions = res.text));
    this.metadataService
      .getPrivacyPolicy()
      .subscribe((res) => (this.privacyPolicy = res.text));
  }

  emailExistenceCheck() {
    if (!this.form.get('email')?.errors) {
      this.registerService
        .checkEmailExists(this.form.controls['email']?.value)
        .subscribe((res: any) => {
          if (res && res.exists) {
            this.form.controls['email'].setErrors({ inuse: true });
          } else {
            this.form.controls['email'].setErrors(null);
          }
        });
    }
  }

  switchPasswordVisibility() {
    console.log('click password visible');
    this.hidePassword = !this.hidePassword;
    this.passwordVisibilityBtnClicked = true;
    setTimeout(() => {
      this.passwordVisibilityBtnClicked = false;
    }, 500);
  }

  switchShowPasswordPolicy() {
    this.showPasswordPolicy = !this.showPasswordPolicy;

    setTimeout(() => {
      if (!this.passwordVisibilityBtnClicked) {
      }
    }, 100);
  }

  removeBirthDateValidation() {
    this.form.controls['birthDate'].clearValidators();
    this.form.controls['birthDate'].updateValueAndValidity();
  }

  addBirthDateValidation() {
    this.form.controls['birthDate'].addValidators(Validators.required);
    this.form.controls['birthDate'].updateValueAndValidity();
  }

  updateBirthDate(date: Date) {
    this.form.controls['birthDate'].setValue(date.toDateString());
  }

  openDialog(data: DialogData) {
    const dialogRef = this.dialog.open(AcceptDeclineDialogComponent, {
      data: data,
      panelClass: 'accept-reject-dialog-panel',
    });

    dialogRef.afterClosed().subscribe((accept) => {
      this.form.controls[data.formControlName].setValue(accept ?? false);
    });
  }

  showTermsConditions(currentVal: boolean) {
    if (currentVal) {
      return;
    }

    this.openDialog({
      header: 'Terms and Conditions',
      body: this.termsConditions,
      formControlName: 'termsConditions',
    });
  }

  showPrivacyPolicy(currentVal: boolean) {
    if (currentVal) {
      return;
    }

    this.openDialog({
      header: 'Privacy Policy',
      body: this.privacyPolicy,
      formControlName: 'privacyPolicy',
    });
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    let user = {} as RegistrationUser;
    user.email = this.form.controls['email'].value;
    user.password = this.form.controls['password'].value;
    user.firstName = this.form.controls['firstName'].value;
    user.lastName = this.form.controls['lastName'].value;
    user.birthDate = Utils.getDateStr(this.form.controls['birthDate'].value);

    user.data = {} as RegistrationUserData;
    user.data.gender = this.form.controls['gender'].value;
    user.data.citizenship = this.form.controls['citizenship'].value;
    user.data.subscription = this.form.controls['subscription'].value;

    this.spinnerService.show();
    this.registerService.register(user).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.router.navigate(['./' + RoutingConstants.REGISTRATION_SUCCESS], {
          relativeTo: this.route,
          state: { email: user.email },
        });
      } else if (
        res.statusCode == 400 &&
        res.exception &&
        res.exception.fieldErrors &&
        res.exception.fieldErrors['user.email'] &&
        res.exception.fieldErrors['user.email'] &&
        res.exception.fieldErrors['user.email'].length &&
        res.exception.fieldErrors['user.email'][0].code &&
        res.exception.fieldErrors['user.email'][0].code.includes(
          '[duplicate]user.email'
        )
      ) {
        this.form.setErrors({ duplicate: true });
      } else {
        this.form.setErrors({ server: true });
      }
    });
  }
}
