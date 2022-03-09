import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';
import { AuthGuard } from './../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: UserAreaPageComponent,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'application',
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
