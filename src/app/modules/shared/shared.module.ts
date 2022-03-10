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

import { MobilePublicDrawerComponent } from './components/mobile-public-drawer/mobile-public-drawer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserTopDropdownMenuComponent } from './components/user-top-dropdown-menu/user-top-dropdown-menu.component';
@NgModule({
  declarations: [
    NeedHelpComponent,
    MysatacLogoComponent,
    PublicSidebarComponent,
    MobileFooterComponent,
    MobilePublicDrawerComponent,
    HeaderComponent,
    UserTopDropdownMenuComponent,
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
    MobileFooterComponent,
    HeaderComponent,
    MysatacLogoComponent,
    UserTopDropdownMenuComponent,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule {}
