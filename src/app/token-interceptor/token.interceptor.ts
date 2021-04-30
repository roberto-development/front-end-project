import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {tap} from 'rxjs/operators';
import { SharedService } from '../services/shared.service';
import { UserService } from '../services/user.service';

const TOKEN_HEADER_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  tokenInterceptor: string;

  constructor(
    private sharedServ: SharedService,
    private router: Router,
    private userService: UserService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
      request = this.addAuthHeader(request);
      return next.handle(request)
      .pipe(
        tap(() => {},
      (err: any) => {
        console.log(err);
      if (err instanceof HttpErrorResponse) {
        console.log(err.status);
        if (err.status === 401) {
          localStorage.removeItem('token')
          this.router.navigate(['/login'])
          this.sharedServ.loggedInUser = undefined;
        }
      }
    }
      ));
  }

  addAuthHeader(request) {
    const token = localStorage.getItem('token');
    if (token != null) {
      return request.clone({
        setHeaders: {
          Authentication: `Bearer ${token}`,
        },
      });
    }
    return request;
  }
}
