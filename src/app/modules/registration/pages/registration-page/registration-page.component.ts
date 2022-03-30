import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/core/constants/app.constants';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  animations: AppConstants.FADE_ANIMATION,
})
export class RegistrationPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
