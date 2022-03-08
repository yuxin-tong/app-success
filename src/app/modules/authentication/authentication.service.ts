import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private router: Router) {}

  login(loginId: string, password: string) {
    const body = {
      loginId,
      password,
    };
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'b3fd6d5fb1ed46b7819ea5ee77f1c67a',
    });
    return this.http.post(
      'https://apisatac1.azure-api.net/dev/v1/api/token',
      body,
      {
        headers: headers,
      }
    );
  }

  processLoginSuccess(response: any) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('name', response.user.fullName);

    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
    // Check whether the token is expired and return
    // true or false
    //return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');

    this.router.navigate(['/login']);
  }
}
