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
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  registrationPath = `/${RoutingConstants.LOGIN}`;
  forgetPasswordPath = `/${RoutingConstants.FORGET_PASSWORD}`;

  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}

  submit() {}
}
