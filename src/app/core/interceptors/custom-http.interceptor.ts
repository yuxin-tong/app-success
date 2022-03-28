import { EMPTY, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      headers: req.headers.set(
        'Ocp-Apim-Subscription-Key',
        environment.apiSubscriptionKey
      ),
    });

    return next.handle(clonedReq).pipe(
      map((res) => {
        this.spinnerService.hide();
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        this.spinnerService.hide();
        return throwError(() => new Error());
      })
    );
  }
}
