import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedHelpComponent } from './components/need-help/need-help.component';
import { MysatacLogoComponent } from './components/mysatac-logo/mysatac-logo.component';
import { PublicSidebarComponent } from './components/public-sidebar/public-sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MobilePublicDrawerComponent } from './components/mobile-public-drawer/mobile-public-drawer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserTopDropdownMenuComponent } from './components/user-top-dropdown-menu/user-top-dropdown-menu.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { AcceptDeclineDialogComponent } from './components/accept-decline-dialog/accept-decline-dialog.component';
import { MysatacInfoComponent } from './components/mysatac-info/mysatac-info.component';
import { PasswordPolicyComponent } from './components/password-policy/password-policy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { MaterialModule } from './material.module';
import { PasswordComponent } from './components/password/password.component';
import { EmailComponent } from './components/email/email.component';
@NgModule({
  declarations: [
    NeedHelpComponent,
    MysatacLogoComponent,
    PublicSidebarComponent,
    MobileFooterComponent,
    MobilePublicDrawerComponent,
    HeaderComponent,
    UserTopDropdownMenuComponent,
    UserSidebarComponent,
    AcceptDeclineDialogComponent,
    MysatacInfoComponent,
    PasswordPolicyComponent,
    ContactUsComponent,
    ServerErrorComponent,
    PasswordComponent,
    EmailComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    PublicSidebarComponent,
    FlexLayoutModule,
    EmailComponent,
    PasswordComponent,
    MobileFooterComponent,
    HeaderComponent,
    MysatacLogoComponent,
    ContactUsComponent,
    UserTopDropdownMenuComponent,
    PasswordPolicyComponent,
    ReactiveFormsModule,
    UserSidebarComponent,
    ServerErrorComponent,
  ],
})
export class SharedModule {}
