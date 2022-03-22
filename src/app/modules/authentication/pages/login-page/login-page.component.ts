import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  forgotPasswordPath = `/${RoutingConstants.FORGOT_PASSWORD}`;

  constructor(
    private service: AuthenticationService,
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (history && history.state && history.state.redirectMessage) {
      this.snackBar.open(history.state.redirectMessage, 'Close', {
        horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
        verticalPosition: 'top' as MatSnackBarVerticalPosition,
        panelClass: 'snackbar-panel',
      });
    }
  }

  login() {
    this.snackBar.dismiss();

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
    if (res.statusCode != 200) {
      this.loginForm.setErrors({ notFound: true });
      return;
    }

    this.service.processLoginSuccess(res.response);
  }
}
