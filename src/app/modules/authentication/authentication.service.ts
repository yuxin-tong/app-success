import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { User } from 'src/app/core/interfaces/user';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { Utils } from 'src/app/core/utils/utils';
import { environment } from '../../../environments/environment';
import { AcceptDeclineDialogComponent } from '../shared/components/accept-decline-dialog/accept-decline-dialog.component';
interface Course {
  code: string;
  name: string;
  attendance: string;
  attendanceType: string;
  courseStatus: string;
  courseLevel: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
    private authRepo: AuthRepository,
    private dialog: MatDialog
  ) {}

  login(loginId: string, password: string) {
    const body = {
      loginId,
      password,
    };
    return this.http.post<User>(environment.apiBaseUrl + 'token', body);
  }

  idpLogin(identityProvider: string, token: string) {
    return this.http.post(environment.apiBaseUrl + 'idp/login', {
      identityProvider,
      token,
    });
  }

  checkRegistration(response: any) {
    const user = response.user;
    const decodedToken = this.jwtHelper.decodeToken(response.token);

    if (!decodedToken?.isRegistered) {
      user.token = response.token;
      this.router.navigate([RoutingConstants.REGISTRATION], {
        state: { socialUser: user },
      });
    } else {
      this.processLoginSuccess(response);
    }
  }

  processLoginSuccess(response: any) {
    const user = response.user as User;

    this.authRepo.setUser(Utils.mapToUser(response.user));
    this.authRepo.setToken(response.token);
    this.router.navigate(['/']);
  }

  forgotPassword(username: string) {
    return this.http.post(environment.apiBaseUrl + 'forgot-password', {
      username,
    });
  }

  resetPassword(changePasswordId: string, password: string) {
    return this.http.post(
      environment.apiBaseUrl + 'change-password',
      {
        id: changePasswordId,
        newPassword: password,
      },
      { observe: 'response' }
    );
  }

  public isAuthenticated(): boolean {
    console.log(this.authRepo.getToken());
    return !this.jwtHelper.isTokenExpired(this.authRepo.getToken());
  }

  logout() {
    this.authRepo.reset();

    this.router.navigate(['/login']);
  }
}
