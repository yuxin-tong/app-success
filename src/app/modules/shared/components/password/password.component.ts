import {
  AfterViewInit,
  Component,
  Injector,
  Input,
  OnInit,
  Optional,
  Type,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  NgControl,
} from '@angular/forms';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  @Input()
  control: FormControl = new FormControl();

  @Input()
  label = 'Password';

  @Input()
  showPolicyAlways = false;

  @Input()
  showPolicyNever = true;

  @Input()
  email = '';

  @Input()
  showHint = false;
  forgotPasswordPath = `/${RoutingConstants.FORGOT_PASSWORD}`;

  showPasswordPolicy = false;
  hidePassword = true;
  passwordValid = Utils.getPasswordValidity;

  constructor() {}
}
