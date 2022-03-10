import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';
import { AuthGuard } from './../../core/guards/auth.guard';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingConstants.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: RoutingConstants.DASHBOARD,
    component: UserAreaPageComponent,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: RoutingConstants.APPLICATION,
    component: UserAreaPageComponent,
    loadChildren: () =>
      import('./modules/application/application.module').then(
        (m) => m.ApplicationModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAreaRoutingModule {}
