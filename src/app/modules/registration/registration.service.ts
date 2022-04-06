import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { catchError, EMPTY, first, of, switchMap, throwError } from 'rxjs';
import {
  RegistrationApplication,
  RegistrationPostData,
} from 'src/app/core/interfaces/registrationPostData';
import { User } from 'src/app/core/interfaces/user';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { AppService } from 'src/app/core/services/app.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
    private recaptchaV3Service: ReCaptchaV3Service,
    private spinnerService: SpinnerService,
    private authRepo: AuthRepository,
    private appService: AppService
  ) {}

  register(user: User, token = null) {
    const postData = {} as RegistrationPostData;
    postData.user = user;

    if (user.id) {
      // social login - update instead of registration
      user.data.isRegistered = true;
      return this.http.put(environment.apiBaseUrl + 'user/update', postData, {
        headers: { Authorization: 'Bearer ' + token },
      });
    } else {
      postData.registration = {} as RegistrationApplication;
      postData.registration.applicationId =
        environment.registrationApplicationId;
      postData.registration.roles = [environment.registrationUserRole];

      return this.recaptchaV3Service.execute('Register').pipe(
        switchMap((token) =>
          this.http.post(
            environment.apiBaseUrl + 'registration/add',
            postData,
            {
              headers: { token },
            }
          )
        ),

        catchError((error) => {
          this.spinnerService.hide();
          return of({});
        })
      );
    }
  }

  registerSocial(postData: RegistrationPostData) {}

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

  updateTermsConditions(version: string) {
    this.authRepo.user$.pipe(first()).subscribe((user) => {
      const userUpdated = {
        ...user,
        data: { ...user?.data, termsAndConditions: version },
      };

      console.log('@#################');
      return this.http
        .put(
          environment.apiBaseUrl + 'user/update',
          { user: userUpdated },
          { observe: 'response' }
        )
        .subscribe((res) => {
          if (res.status == 200) {
            this.authRepo.updateTermsAndConditions(version);

            this.appService.showAlert(
              true,
              'Updated Terms and Conditions accepted'
            );
          } else {
            this.appService.showAlert(
              false,
              'Updated Terms and Conditions accepted'
            );
          }
        });
    });
  }
}
