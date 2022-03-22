import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent {
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
      .verifyEmail(verificationId)
      .subscribe((resp) => this.processEmailVerifiction(resp));
  }

  processEmailVerifiction(resp: any): void {
    console.log(resp);
    if (resp.statusCode == 200) {
      this.verified = true;
      this.router.navigate([RoutingConstants.LOGIN]);
    } else {
      this.verified = false;
    }
  }
}
