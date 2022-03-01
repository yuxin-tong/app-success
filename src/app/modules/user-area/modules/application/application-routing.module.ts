import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationPageComponent } from './pages/application-page/application-page.component';

const routes: Routes = [
  { path: '', component: ApplicationPageComponent },
  {
    path: 'employment',
    component: ApplicationPageComponent,
    loadChildren: () =>
      import('./modules/employment/employment.module').then(
        (m) => m.EmploymentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
