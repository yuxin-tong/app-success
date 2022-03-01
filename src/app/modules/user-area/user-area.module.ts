import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAreaRoutingModule } from './user-area-routing.module';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [UserAreaPageComponent],
  imports: [CommonModule, UserAreaRoutingModule, DashboardModule],
})
export class UserAreaModule {}
