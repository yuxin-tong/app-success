import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAreaModule } from './modules/user-area/user-area.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { RegistrationModule } from './modules/registration/registration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAreaModule,
    SharedModule,
    AuthenticationModule,
    RegistrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
