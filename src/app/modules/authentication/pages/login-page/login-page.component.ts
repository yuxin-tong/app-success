import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private service: AuthenticationService) {}

  ngOnInit(): void {
    this.service.login().subscribe((courses) => console.log(courses));
  }
}
