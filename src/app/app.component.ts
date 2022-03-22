import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RoutingConstants } from './core/constants/routing.constants';
import { AuthenticationService } from './modules/authentication/authentication.service';

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
    public authService: AuthenticationService
  ) {
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
