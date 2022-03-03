import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  constructor(private http: HttpClient) {}

  login(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }

  logout() {}
}
