import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
