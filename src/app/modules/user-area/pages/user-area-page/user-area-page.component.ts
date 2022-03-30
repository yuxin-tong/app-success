import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/core/constants/app.constants';

@Component({
  selector: 'app-user-area-page',
  templateUrl: './user-area-page.component.html',
  styleUrls: ['./user-area-page.component.scss'],
  animations: AppConstants.FADE_ANIMATION,
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
