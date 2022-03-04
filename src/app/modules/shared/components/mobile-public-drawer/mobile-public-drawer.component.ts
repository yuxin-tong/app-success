import { Component, OnInit, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mobile-public-drawer',
  templateUrl: './mobile-public-drawer.component.html',
  styleUrls: ['./mobile-public-drawer.component.scss'],
})
export class MobilePublicDrawerComponent implements OnInit {
  constructor(
    @Optional()
    private _bottomSheetRef: MatBottomSheetRef<MobilePublicDrawerComponent>
  ) {}

  ngOnInit(): void {}

  close(event: MouseEvent) {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
