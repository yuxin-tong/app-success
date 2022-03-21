import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { ForgetPasswordPageComponent } from './pages/forget-password-page/forget-password-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: RoutingConstants.LOGIN,
    component: LoginPageComponent,
  },
  {
    path: RoutingConstants.FORGET_PASSWORD,
    component: ForgetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
