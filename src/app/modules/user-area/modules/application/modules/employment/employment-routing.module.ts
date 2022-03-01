import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentHomePageComponent } from './pages/employment-home-page/employment-home-page.component';

const routes: Routes = [{ path: '', component: EmploymentHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploymentRoutingModule {}
