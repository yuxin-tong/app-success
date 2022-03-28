import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-verify-registration',
  templateUrl: './verify-registration.component.html',
  styleUrls: ['./verify-registration.component.scss'],
})
export class VerifyRegistrationComponent {
  verified?: boolean = undefined;
  resendVerificationEmailPath = `/${RoutingConstants.REGISTRATION}/${RoutingConstants.RESEND_VERIFICATION_EMAIL}`;

  constructor(
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    private router: Router,
    public spinnerService: SpinnerService
  ) {
    this.route.params.subscribe((params) => {
      this.postEmailVerification(params['verificationId']);
    });
  }

  postEmailVerification(verificationId: string) {
    this.spinnerService.show();
    this.registrationService
      .verifyRegistration(verificationId)
      .subscribe((resp) => this.processEmailVerifiction(resp));
  }

  processEmailVerifiction(resp: any): void {
    console.log(resp);
    if (resp.statusCode == 200) {
      this.verified = true;
      this.router.navigate([RoutingConstants.LOGIN], {
        state: {
          redirectMessage: 'Your email address is verified! You can login now.',
        },
      });
    } else {
      this.verified = false;
    }
  }
}
