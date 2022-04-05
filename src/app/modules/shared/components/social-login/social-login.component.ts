import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { first } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent implements OnInit {
  google = GoogleLoginProvider.PROVIDER_ID;
  facebook = FacebookLoginProvider.PROVIDER_ID;

  constructor(
    private authService: AuthenticationService,
    private socialAuthService: SocialAuthService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}

  public loginSocial(socialId: string) {
    console.log({ socialId });

    this.socialAuthService.authState
      .pipe(first())
      .subscribe((user: SocialUser) => {
        console.warn({ user });
        this.spinnerService.show();

        this.authService
          .idpLogin(user.provider, user.idToken ?? user.authToken)
          .subscribe((res) => this.processLogin(res));
      });

    this.socialAuthService
      .signIn(socialId)
      .then((d) => {})
      .catch((err) => {});
  }
  processLogin(res: any): void {
    if (res.statusCode == 200) {
      this.authService.checkRegistration(res.response);
    } else {
    }
  }
}
