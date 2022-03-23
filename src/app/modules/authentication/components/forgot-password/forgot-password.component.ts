import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService,
    private authService: AuthenticationService
  ) {}

  registrationPath = `/${RoutingConstants.REGISTRATION}`;
  loginPath = `/${RoutingConstants.LOGIN}`;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {}

  submit() {
    this.authService
      .forgotPassword(this.form.controls['email']?.value)
      .subscribe();
  }
}
