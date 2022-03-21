import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.scss'],
})
export class RegistrationSuccessComponent implements OnInit {
  constructor(private router: Router) {}

  email = '';

  ngOnInit(): void {
    if (!history.state || !history.state.email) {
      this.router.navigate([RoutingConstants.REGISTRATION]);
    } else {
      this.email = history.state.email;
    }
  }
}
