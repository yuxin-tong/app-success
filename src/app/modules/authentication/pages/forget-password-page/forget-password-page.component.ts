import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: ['./forget-password-page.component.scss'],
})
export class ForgetPasswordPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public spinnerService: SpinnerService
  ) {}

  registrationPath = `/${RoutingConstants.REGISTRATION}`;
  loginPath = `/${RoutingConstants.LOGIN}`;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {}

  submit() {}
}
