import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { environment } from '../../../environments/environment';
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
    private authRepo: AuthRepository
  ) {}

  login(loginId: string, password: string) {
    const body = {
      loginId,
      password,
    };
    return this.http.post(environment.apiBaseUrl + 'token', body);
  }

  idpLogin(identityProvider: string, token: string) {
    return this.http.post(environment.apiBaseUrl + 'idp/login', {
      identityProvider,
      token,
    });
  }

  processLoginSuccess(response: any) {
    const user = response.user;
    this.authRepo.setUser({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
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
    return !this.jwtHelper.isTokenExpired(this.authRepo.getToken());
  }

  logout() {
    this.authRepo.reset();

    this.router.navigate(['/login']);
  }
}
