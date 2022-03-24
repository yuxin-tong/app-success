import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-resend-verification-email',
  templateUrl: './resend-verification-email.component.html',
  styleUrls: ['./resend-verification-email.component.scss'],
  animations: AppConstants.IN_OUT_ANIMATION,
})
export class ResendVerificationEmailComponent implements OnInit {
  email = '';
  submitted = false;
  serverError = false;

  constructor(
    private router: Router,
    private registrationService: RegistrationService,
    public spinnerService: SpinnerService
  ) {
    if (!history.state || !history.state.email) {
      this.router.navigate([RoutingConstants.LOGIN]);
    } else {
      this.email = history.state.email;
    }
  }

  ngOnInit(): void {}

  submit() {
    this.spinnerService.show();
    this.registrationService
      .resendVerificationEmail(this.email)
      .subscribe((resp) => {
        if (resp.statusCode == 200) {
          this.submitted = true;
        } else {
          this.serverError = true;
        }
      });
  }
}
