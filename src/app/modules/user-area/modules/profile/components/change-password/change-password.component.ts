import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { AppService } from 'src/app/core/services/app.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Utils } from 'src/app/core/utils/utils';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  passwordValid = Utils.getPasswordValidity;
  changePasswordId = '';
  hidePassword = true;

  form = this.formBuilder.group({
    currentPassword: ['', [Validators.required]],
    newPassword: AppConstants.PASSWORD_FORM_CONTROL(
      AppConstants.PASSWORD_REGEX
    ),
  });

  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService,
    private profileService: ProfileService,
    private appService: AppService
  ) {}

  ngOnInit(): void {}

  submit() {
    if (!this.form.valid) {
      return;
    }
    this.spinnerService.show();

    this.profileService
      .changePassword(
        this.form.controls['currentPassword']?.value,
        this.form.controls['newPassword']?.value
      )
      .subscribe({
        next: (resp: any) => {
          if (resp && resp.status) {
            this.appService.showAlert(true, 'Password changed successfully');
          } else {
            this.form.setErrors({ server: true });
          }
        },
        error: () => {
          this.form.setErrors({ server: true });
        },
      });
  }
}
