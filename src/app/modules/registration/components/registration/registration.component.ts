import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.min(8),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
        ),
      ],
    ],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    citizenshipStatus: ['', [Validators.required]],
    termsConditions: ['', [Validators.requiredTrue]],
    privacyPolicy: ['', [Validators.requiredTrue]],
    subscription: ['', []],
  });

  loginPath = `/${RoutingConstants.LOGIN}`;

  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}

  submit() {}
}
