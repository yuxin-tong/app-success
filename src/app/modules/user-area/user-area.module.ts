import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAreaRoutingModule } from './user-area-routing.module';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserAreaPageComponent],
  imports: [CommonModule, UserAreaRoutingModule, SharedModule],
})
export class UserAreaModule {}
