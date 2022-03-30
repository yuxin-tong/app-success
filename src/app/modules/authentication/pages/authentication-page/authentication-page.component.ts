import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { AppConstants } from 'src/app/core/constants/app.constants';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss'],
  animations: AppConstants.FADE_ANIMATION,
})
export class AuthenticationPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
