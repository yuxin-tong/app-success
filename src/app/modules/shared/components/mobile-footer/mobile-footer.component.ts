import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MobilePublicDrawerComponent } from '../mobile-public-drawer/mobile-public-drawer.component';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss'],
})
export class MobileFooterComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openMenu(): void {
    this._bottomSheet.open(MobilePublicDrawerComponent, {
      panelClass: 'app-panel',
    });
  }
}
