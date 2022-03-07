import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAreaRoutingModule } from './user-area-routing.module';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ApplicationModule } from './modules/application/application.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserAreaPageComponent],
  imports: [
    CommonModule,
    UserAreaRoutingModule,
    DashboardModule,
    ApplicationModule,
    SharedModule,
  ],
})
export class UserAreaModule {}
