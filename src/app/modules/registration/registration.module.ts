import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [CommonModule, RegistrationRoutingModule, SharedModule],
})
export class RegistrationModule {}
