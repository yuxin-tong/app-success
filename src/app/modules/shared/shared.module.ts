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
    MatToolbarModule,
  ],
  exports: [
    PublicSidebarComponent,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MobileFooterComponent,
    HeaderComponent,
    MysatacLogoComponent,
  ],
})
export class SharedModule {}
