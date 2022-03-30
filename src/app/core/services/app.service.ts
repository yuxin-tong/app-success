import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(public snackBar: MatSnackBar) {}

  static showCookieConsent() {}
}
