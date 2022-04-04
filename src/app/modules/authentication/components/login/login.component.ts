import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { first } from 'rxjs';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: AppConstants.IN_OUT_ANIMATION,
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  registrationPath = `/${RoutingConstants.REGISTRATION}`;
  redirectMessage = '';
  resendRegistrationEmailPath = `/${RoutingConstants.REGISTRATION}/${RoutingConstants.RESEND_VERIFICATION_EMAIL}`;

  constructor(
    private service: AuthenticationService,
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    if (true || (history && history.state && history.state.redirectMessage)) {
      this.redirectMessage = history.state.redirectMessage;
    }
  }

  login() {
    this.redirectMessage = '';

    if (this.form.valid) {
      this.spinnerService.show();

      this.service
        .login(
          this.form.controls['email'].value,
          this.form.controls['password'].value
        )
        .subscribe((res) => this.processLogin(res));
    }
  }

  public loginGoogle() {
    this.socialAuthService.authState
      .pipe(first())
      .subscribe((user: SocialUser) => {
        console.log(user);
        if (user?.idToken) {
          this.service
            .idpLogin(GoogleLoginProvider.PROVIDER_ID, user.idToken)
            .subscribe((res) => this.processLogin(res));
        }
      });
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  private processLogin(res: any) {
    if (res.statusCode == 200) {
      this.service.processLoginSuccess(res.response);
    } else if (res.statusCode == 213) {
      this.form.setErrors({ notVerified: true });
    } else {
      this.form.setErrors({ notFound: true });
      return;
    }
  }
}
