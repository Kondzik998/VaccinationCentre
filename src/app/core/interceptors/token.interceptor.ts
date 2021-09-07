import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!/^(\/?api\/)/i.test(request.url)) return next.handle(request);

    if (!this.authService.user) {
      this.authService.logout(false);
      return EMPTY;
    }

    const req = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        GoogleAuthorization: `Bearer ${this.authService.user.idToken}`,
      },
    });

    return next.handle(req);
  }
}
