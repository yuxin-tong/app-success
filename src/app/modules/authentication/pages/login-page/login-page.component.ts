import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  showServerError = false;

  constructor(
    private service: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.service
        .login(
          this.loginForm.controls['email'].value,
          this.loginForm.controls['password'].value
        )
        .subscribe((res) => this.processLogin(res));
    }
  }

  private processLogin(res: any) {
    if (res.statusCode != 200) {
      this.showServerError = true;
      return;
    }

    this.service.processLoginSuccess(res.response);
  }
}
