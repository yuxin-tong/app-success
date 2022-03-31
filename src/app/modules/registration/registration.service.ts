import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { switchMap } from 'rxjs';
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
  constructor(
    private http: HttpClient,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

  register(user: RegistrationUser) {
    const postData = {} as RegistrationPostData;
    postData.registration = {} as RegistrationApplication;

    postData.registration.applicationId = environment.registrationApplicationId;
    postData.registration.roles = [environment.registrationUserRole];
    postData.user = user;

    return this.recaptchaV3Service
      .execute('Register')
      .pipe(
        switchMap((token) =>
          this.http.post(
            environment.apiBaseUrl + 'registration/add',
            postData,
            { headers: { token } }
          )
        )
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
