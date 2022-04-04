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
    this.socialAuthService.authState
      .pipe(first())
      .subscribe((user: SocialUser) => {
        this.spinnerService.show();

        if (user?.idToken) {
          this.authService
            .idpLogin(GoogleLoginProvider.PROVIDER_ID, user.idToken)
            .subscribe((res) => this.processLogin(res));
        }
      });

    this.socialAuthService.signIn(socialId);
  }
  processLogin(res: any): void {
    if (res.statusCode == 200) {
      this.authService.processLoginSuccess(res.response);
    } else {
    }
  }
}
