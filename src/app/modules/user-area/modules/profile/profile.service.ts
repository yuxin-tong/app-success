import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  changePassword(currentPassword: string, password: string) {
    return this.http.post(
      '/api/change-password',
      {
        currentPassword,
        password,
      },
      { observe: 'response' }
    );
  }
}
