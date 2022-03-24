import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: AppConstants.IN_OUT_ANIMATION,
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  registrationPath = `/${RoutingConstants.REGISTRATION}`;
  forgotPasswordPath = `/${RoutingConstants.FORGOT_PASSWORD}`;

  redirectMessage = '';

  resendRegistrationEmailPath = `/${RoutingConstants.REGISTRATION}/${RoutingConstants.RESEND_VERIFICATION_EMAIL}`;

  constructor(
    private service: AuthenticationService,
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (history && history.state && history.state.redirectMessage) {
      this.redirectMessage = history.state.redirectMessage;
    }
  }

  login() {
    this.redirectMessage = '';

    if (this.loginForm.valid) {
      this.spinnerService.show();

      this.service
        .login(
          this.loginForm.controls['email'].value,
          this.loginForm.controls['password'].value
        )
        .subscribe((res) => this.processLogin(res));
    }
  }

  private processLogin(res: any) {
    if (res.statusCode == 200) {
      this.service.processLoginSuccess(res.response);
    } else if (res.statusCode == 213) {
      this.loginForm.setErrors({ notVerified: true });
    } else {
      this.loginForm.setErrors({ notFound: true });
      return;
    }
  }
}
