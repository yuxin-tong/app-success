import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedHelpComponent } from './components/need-help/need-help.component';
import { MysatacLogoComponent } from './components/mysatac-logo/mysatac-logo.component';
import { PublicSidebarComponent } from './components/public-sidebar/public-sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';

import { MobilePublicDrawerComponent } from './components/mobile-public-drawer/mobile-public-drawer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserTopDropdownMenuComponent } from './components/user-top-dropdown-menu/user-top-dropdown-menu.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { AcceptDeclineDialogComponent } from './components/accept-decline-dialog/accept-decline-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MysatacInfoComponent } from './components/mysatac-info/mysatac-info.component';
import { PasswordPolicyComponent } from './components/password-policy/password-policy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './components/server-error/server-error.component';
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
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    OverlayModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    MatSnackBarModule,
  ],
  exports: [
    PublicSidebarComponent,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MobileFooterComponent,
    HeaderComponent,
    MysatacLogoComponent,
    ContactUsComponent,
    UserTopDropdownMenuComponent,
    PasswordPolicyComponent,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    UserSidebarComponent,
    MatCardModule,
    OverlayModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ServerErrorComponent,
  ],
})
export class SharedModule {}
