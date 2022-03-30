import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { AppConstants } from './core/constants/app.constants';
import { RoutingConstants } from './core/constants/routing.constants';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { AlertComponent } from './modules/shared/components/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MySATAC';
  authArea = false;
  registrationArea = false;
  publicArea = false;

  configSuccess: MatSnackBarConfig = {
    panelClass: 'cookie-consent-alert',
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  };

  constructor(
    private router: Router,
    public authService: AuthenticationService,
    private _snackBar: MatSnackBar
  ) {
    this.showCookieConsent();

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.authArea = e.urlAfterRedirects.includes(RoutingConstants.AUTH);
        this.registrationArea = e.urlAfterRedirects.includes(
          RoutingConstants.REGISTRATION
        );

        this.publicArea = this.authArea || this.registrationArea;
      }
    });
  }
  showCookieConsent() {
    if (sessionStorage.getItem(AppConstants.cookieConsentSessionKey)) {
      return;
    }
    this._snackBar.openFromComponent(AlertComponent, {
      data: {
        message:
          'We use cookies to ensure you get the best website experience. By using our website you agree to our <a href="https://www.satac.edu.au/privacy" target="_blank">Privacy Policy</a>',
        btnText: 'Dismiss',
      },
      ...this.configSuccess,
    });
  }
}
