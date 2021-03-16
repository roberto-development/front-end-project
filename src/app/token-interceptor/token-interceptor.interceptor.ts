import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

const TOKEN_HEADER_KEY = 'Authentication';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
  // null
  // );

  constructor(
    private authService: AuthenticationService,
    private sharedServ: SharedService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = request;
    const tokenVal = this.sharedServ.getToken();
    const tokenVal2 = this.authService.getToken();
    console.log('tok1' + tokenVal);
    console.log('tok2' + tokenVal2);

    if (!tokenVal) {
      authReq = request.clone({
        // setHeaders: {
        //   Authorization: `Bearer ${token}`,
        // },
        headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + tokenVal),
      });
      console.log(request);
    }
    return next.handle(authReq);
  }

  private addToken(request: HttpRequest<any>, token: string) {
    request.clone({
      // setHeaders: {
      //   Authorization: `Bearer ${token}`,
      // },
      headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
    });
    return;
  }
}
