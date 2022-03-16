import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [RegistrationPageComponent, RegistrationComponent],
  imports: [CommonModule, RegistrationRoutingModule, SharedModule],
})
export class RegistrationModule {}
