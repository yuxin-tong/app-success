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
import { AppService } from './core/services/app.service';
import { SpinnerService } from './core/services/spinner.service';
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

  constructor(
    private router: Router,
    public authService: AuthenticationService,
    private appService: AppService,
    public spinnerService: SpinnerService
  ) {
    this.appService.showCookieConsent();

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
}
