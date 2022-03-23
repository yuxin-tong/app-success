import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Utils } from 'src/app/core/utils/utils';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: AppConstants.IN_OUT_ANIMATION,
})
export class ResetPasswordComponent implements OnInit {
  registrationPath = `/${RoutingConstants.REGISTRATION}`;

  passwordValid = Utils.getPasswordValidity;
  changePasswordId = '';

  form = this.formBuilder.group({
    password: AppConstants.PASSWORD_FORM_CONTROL(AppConstants.PASSWORD_REGEX),
  });

  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService,
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.changePasswordId = params['changePasswordId'];
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.changePasswordId);
    this.authService
      .resetPassword(
        this.changePasswordId,
        this.form.controls['password']?.value
      )
      .subscribe();
  }
}
