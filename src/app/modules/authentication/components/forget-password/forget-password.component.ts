import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
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
