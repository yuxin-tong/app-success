import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  submitted = false;
  serverError = false;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private router: Router,
    private registrationService: RegistrationService,
    public spinnerService: SpinnerService,
    private formBuilder: FormBuilder
  ) {
    if (history?.state?.email) {
      this.form.controls['email'].setValue(history.state.email);
    }
  }

  ngOnInit(): void {}

  submit() {
    if (!this.form.valid) {
      return;
    }

    this.spinnerService.show();
    this.registrationService
      .resendVerificationEmail(this.form.controls['email']?.value)
      .subscribe((resp) => {
        if (resp && resp.status == 200) {
          this.submitted = true;
        } else {
          this.serverError = true;
        }
      });
  }
}
