import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
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

  constructor(private http: HttpClient, private router: Router) {}

  login(loginId: string, password: string) {
    const body = {
      loginId,
      password,
    };
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': environment.apiSubscriptionKey,
    });
    return this.http.post(environment.apiBaseUrl + 'token', body, {
      headers: headers,
    });
  }

  processLoginSuccess(response: any) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('name', response.user.fullName);

    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') || undefined;
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserFullname(): string {
    return localStorage.getItem('name') || '';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');

    this.router.navigate(['/login']);
  }
}
