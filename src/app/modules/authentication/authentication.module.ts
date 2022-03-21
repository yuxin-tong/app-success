import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { ForgetPasswordPageComponent } from './pages/forget-password-page/forget-password-page.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    ForgetPasswordPageComponent,
    AuthenticationPageComponent,
    ForgetPasswordComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
