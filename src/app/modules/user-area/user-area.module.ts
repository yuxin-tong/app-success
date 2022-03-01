import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAreaRoutingModule } from './user-area-routing.module';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';

@NgModule({
  declarations: [UserAreaPageComponent],
  imports: [CommonModule, UserAreaRoutingModule],
})
export class UserAreaModule {}
