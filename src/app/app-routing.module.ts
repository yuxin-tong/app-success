import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from './core/constants/routing.constants';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticationPageComponent } from './modules/authentication/pages/authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: RoutingConstants.LOGIN,
    redirectTo: `${RoutingConstants.AUTH}/${RoutingConstants.LOGIN}`,
  },
  {
    path: RoutingConstants.FORGOT_PASSWORD,
    redirectTo: `${RoutingConstants.AUTH}/${RoutingConstants.FORGOT_PASSWORD}`,
  },
  {
    path: RoutingConstants.AUTH,
    component: AuthenticationPageComponent,
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
