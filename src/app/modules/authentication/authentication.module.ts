import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    AuthenticationPageComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
