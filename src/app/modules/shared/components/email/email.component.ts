import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { RegistrationService } from 'src/app/modules/registration/registration.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  @Input()
  control: FormControl = new FormControl();

  @Input()
  checkExists = false;

  loginPath = `/${RoutingConstants.LOGIN}`;
  forgotPasswordPath = `/${RoutingConstants.FORGOT_PASSWORD}`;

  constructor(private registerService: RegistrationService) {}

  ngOnInit(): void {}

  emailExistenceCheck() {
    if (this.checkExists && !this.control?.errors) {
      this.registerService
        .checkEmailExists(this.control?.value)
        .subscribe((res: any) => {
          if (res && res.exists) {
            this.control.setErrors({ inuse: true });
          } else {
            this.control.setErrors(null);
          }
        });
    }
  }
}
