import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'src/app/modules/shared/components/alert/alert.component';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(public snackBar: MatSnackBar) {}

  showCookieConsent() {
    if (sessionStorage.getItem(AppConstants.cookieConsentSessionKey)) {
      return;
    }
    this.snackBar.openFromComponent(AlertComponent, {
      data: {
        message:
          'We use cookies to ensure you get the best website experience. By using our website you agree to our <a href="https://www.satac.edu.au/privacy" target="_blank">Privacy Policy</a>',
        btnText: 'Dismiss',
      },
      panelClass: 'cookie-consent-alert',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  showAlert(success: boolean, message: string, btnText = 'Ok') {
    this.snackBar.openFromComponent(AlertComponent, {
      data: {
        message,
        btnText,
      },
      panelClass: success ? 'success-alert' : 'success-alert',
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
