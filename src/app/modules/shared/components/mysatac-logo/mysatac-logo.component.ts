import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysatac-logo',
  templateUrl: './mysatac-logo.component.html',
  styleUrls: ['./mysatac-logo.component.scss'],
})
export class MysatacLogoComponent implements OnInit {
  @Input()
  dark = true;

  constructor() {}

  ngOnInit(): void {}
}
