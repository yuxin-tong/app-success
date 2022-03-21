import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: RoutingConstants.LOGIN,
    component: LoginPageComponent,
  },
  {
    path: RoutingConstants.FORGOT_PASSWORD,
    component: ForgotPasswordComponent,
  },
  {
    path: RoutingConstants.RESET_PASSWORD,
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
