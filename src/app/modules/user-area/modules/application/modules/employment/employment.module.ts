import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentHomePageComponent } from './pages/employment-home-page/employment-home-page.component';


@NgModule({
  declarations: [
    EmploymentHomePageComponent
  ],
  imports: [
    CommonModule,
    EmploymentRoutingModule
  ]
})
export class EmploymentModule { }
