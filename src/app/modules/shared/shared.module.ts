import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedHelpComponent } from './components/need-help/need-help.component';
import { MysatacLogoComponent } from './components/mysatac-logo/mysatac-logo.component';
import { PublicSidebarComponent } from './components/public-sidebar/public-sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MobilePublicDrawerComponent } from './components/mobile-public-drawer/mobile-public-drawer.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    NeedHelpComponent,
    MysatacLogoComponent,
    PublicSidebarComponent,
    MobileFooterComponent,
    MobilePublicDrawerComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    PublicSidebarComponent,
    FlexLayoutModule,
    MatBottomSheetModule,
    MobileFooterComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
