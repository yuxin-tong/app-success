import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';

@Component({
  selector: 'app-user-top-dropdown-menu',
  templateUrl: './user-top-dropdown-menu.component.html',
  styleUrls: ['./user-top-dropdown-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserTopDropdownMenuComponent implements OnInit {
  constructor(
    public authRepo: AuthRepository,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
