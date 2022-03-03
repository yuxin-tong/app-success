import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { ForgetPasswordPageComponent } from './pages/forget-password-page/forget-password-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationPageComponent,
    children: [{ path: '', component: LoginPageComponent }],
  },
  {
    path: 'forget-password',
    component: AuthenticationPageComponent,
    children: [{ path: '', component: ForgetPasswordPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
