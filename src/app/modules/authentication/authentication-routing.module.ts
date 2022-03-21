import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
