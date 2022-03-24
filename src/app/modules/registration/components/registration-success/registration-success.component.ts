import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.scss'],
  animations: AppConstants.IN_OUT_ANIMATION,
})
export class RegistrationSuccessComponent implements OnInit {
  constructor(private router: Router) {}
  resendRegistrationEmailPath = `/${RoutingConstants.REGISTRATION}/${RoutingConstants.RESEND_VERIFICATION_EMAIL}`;
  email = '';
  showResendLink = false;

  ngOnInit(): void {
    if (!history.state || !history.state.email) {
      this.router.navigate([RoutingConstants.REGISTRATION]);
    } else {
      this.email = history.state.email;
    }

    setTimeout(() => {
      this.showResendLink = true;
    }, 15000);
  }
}
