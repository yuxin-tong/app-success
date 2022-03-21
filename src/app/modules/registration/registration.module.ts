import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { ResendVerificationEmailComponent } from './components/resend-verification-email/resend-verification-email.component';

@NgModule({
  declarations: [
    RegistrationPageComponent,
    RegistrationComponent,
    RegistrationSuccessComponent,
    ResendVerificationEmailComponent,
  ],
  imports: [CommonModule, RegistrationRoutingModule, SharedModule],
})
export class RegistrationModule {}
