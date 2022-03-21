import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResendVerificationEmailComponent } from './components/resend-verification-email/resend-verification-email.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationPageComponent,
    children: [
      {
        path: '',
        component: RegistrationComponent,
      },
      {
        path: RoutingConstants.REGISTRATION_SUCCESS,
        component: RegistrationSuccessComponent,
      },
      {
        path: RoutingConstants.RESEND_VERIFICATION_EMAIL,
        component: ResendVerificationEmailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
