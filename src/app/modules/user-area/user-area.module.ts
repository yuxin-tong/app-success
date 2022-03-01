import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAreaRoutingModule } from './user-area-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserAreaPageComponent
  ],
  imports: [
    CommonModule,
    UserAreaRoutingModule
  ]
})
export class UserAreaModule { }
