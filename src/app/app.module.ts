import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAreaModule } from './modules/user-area/user-area.module';
import { SharedModule } from './modules/shared/shared.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './core/interceptors/custom-http.interceptor';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RegistrationModule,
    UserAreaModule,
    RecaptchaV3Module,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-AU' },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptchaSiteKey,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
