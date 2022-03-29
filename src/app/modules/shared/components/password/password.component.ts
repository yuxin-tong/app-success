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
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  @Input()
  control: FormControl = new FormControl();

  showPasswordPolicy = false;
  hidePassword = true;
  passwordValid = Utils.getPasswordValidity;
  constructor() {}
}
