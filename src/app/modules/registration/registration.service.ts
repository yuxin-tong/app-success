import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  RegistrationApplication,
  RegistrationPostData,
  RegistrationUser,
} from 'src/app/core/interfaces/registrationPostData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(user: RegistrationUser) {
    const postData = {} as RegistrationPostData;
    postData.registration = {} as RegistrationApplication;

    postData.registration.applicationId = environment.registrationApplicationId;
    postData.registration.roles = [environment.registrationUserRole];
    postData.user = user;

    return this.http.post(
      environment.apiBaseUrl + 'registration/add',
      postData
    );
  }

  checkEmailExists(username: string) {
    return this.http.post(environment.apiBaseUrl + 'user/exists', {
      username,
    });
  }

  verifyRegistration(verificationId: string) {
    return this.http.post(
      environment.apiBaseUrl + 'verify-registration',
      {
        verificationId,
      },
      { observe: 'response' }
    );
  }

  resendVerificationEmail(email: string) {
    const applicationId = environment.registrationApplicationId;
    return this.http.put<any>(
      environment.apiBaseUrl + 'resend-verification-check',
      {
        email,
      },
      { observe: 'response' }
    );
  }
}
