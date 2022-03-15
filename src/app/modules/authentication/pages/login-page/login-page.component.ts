import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  registrationPath = `/${RoutingConstants.REGISTRATION}`;
  forgetPasswordPath = `/${RoutingConstants.FORGET_PASSWORD}`;

  constructor(
    private service: AuthenticationService,
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.service
        .login(
          this.loginForm.controls['email'].value,
          this.loginForm.controls['password'].value
        )
        .subscribe((res) => this.processLogin(res));
    }
  }

  private processLogin(res: any) {
    console.warn('######', res);
    if (res.statusCode != 200) {
      this.loginForm.setErrors({ notFound: true });
      return;
    }

    this.service.processLoginSuccess(res.response);
  }
}
