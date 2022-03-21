import { Component, Input, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-public-sidebar',
  templateUrl: './public-sidebar.component.html',
  styleUrls: ['./public-sidebar.component.scss'],
})
export class PublicSidebarComponent implements OnInit {
  @Input()
  showMySatacInfo = true;

  constructor() {}

  ngOnInit(): void {}
}
