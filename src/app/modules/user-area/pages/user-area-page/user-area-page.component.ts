import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-area-page',
  templateUrl: './user-area-page.component.html',
  styleUrls: ['./user-area-page.component.scss'],
})
export class UserAreaPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mouseenter(test: number) {
    console.log('entering: ' + test);
  }

  mouseleave(test: number) {
    console.log('leaving: ' + test);
  }
}
