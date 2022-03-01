import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationPageComponent } from './pages/application-page/application-page.component';
import { EmploymentModule } from './modules/employment/employment.module';


@NgModule({
  declarations: [
    ApplicationPageComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    EmploymentModule
  ]
})
export class ApplicationModule { }
