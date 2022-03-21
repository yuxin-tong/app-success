import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/interfaces/ui/dialogData';

@Component({
  selector: 'app-accept-decline-dialog',
  templateUrl: './accept-decline-dialog.component.html',
  styleUrls: ['./accept-decline-dialog.component.scss'],
})
export class AcceptDeclineDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}
}
