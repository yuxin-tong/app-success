import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: AppConstants.IN_OUT_ANIMATION,
})
export class ResetPasswordComponent implements OnInit {
  registrationPath = `/${RoutingConstants.REGISTRATION}`;
  passwordRegex = [
    /(?=.*[a-z])/,
    /(?=.*[A-Z])/,
    /(?=.*\d)/,
    /(?=.*[@$!%*?&])/,
    /[A-Za-z\d@$!%*?&]{8,}/,
  ];
  showPasswordPolicy = false;
  passwordValid = Utils.getPasswordValidity;

  form = this.formBuilder.group({
    password: AppConstants.PASSWORD_FORM_CONTROL(AppConstants.PASSWORD_REGEX),
  });

  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}

  submit() {}
}
