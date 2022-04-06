import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/interfaces/ui/dialogData';

@Component({
  selector: 'app-accept-decline-dialog',
  templateUrl: './accept-decline-dialog.component.html',
  styleUrls: ['./accept-decline-dialog.component.scss'],
})
export class AcceptDeclineDialogComponent implements OnInit {
  @Output()
  btnClicked = new EventEmitter<boolean>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}

  accept() {
    this.btnClicked.emit(true);
  }
}
