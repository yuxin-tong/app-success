import { animate, style, transition, trigger } from '@angular/animations';
import { Validators } from '@angular/forms';

export const AppConstants = {
  cookieConsentSessionKey: 'cookieConsent',

  PASSWORD_REGEX: [
    /(?=.*[a-z])/,
    /(?=.*[A-Z])/,
    /(?=.*\d)/,
    /(?=.*[@$!%*?&])/,
    /[A-Za-z\d@$!%*?&]{8,}/,
  ],

  PASSWORD_FORM_CONTROL: (regexes: RegExp[]) => [
    '',
    [
      Validators.required,
      Validators.pattern(
        '^' + regexes.map((regex) => regex.source).join('') + '$'
      ),
    ],
    null,
    { updateOn: blur },
  ],

  IN_OUT_ANIMATION: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.1s ease-out', style({ height: '80px', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '80px', opacity: 1 }),
        animate('0.1s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],

  FADE_ANIMATION: [
    trigger('fade', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
};
