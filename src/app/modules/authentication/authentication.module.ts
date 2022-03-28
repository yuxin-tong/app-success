import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AuthenticationPageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
