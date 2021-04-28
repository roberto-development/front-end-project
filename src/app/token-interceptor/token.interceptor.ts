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
  // private isRefreshing = false;
  tokenInterceptor: string;

  constructor(
    private sharedServ: SharedService,
    private router: Router,
    private userService: UserService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let ok: string;
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
        }
      }
    }
      ));

          //     (err: any) => {
          //   console.log(err);
          // // }))
          // if (err instanceof HttpErrorResponse) {
          // //   // console.log('dentro err inst');

          //     if (err.status === 401) {

          //       this.userService.logout();
          //     }
          //     const error = err.error.message || err.statusText;
          //     return throwError(err);
          //   }}

          // );

          // return next.handle(request);

    //   return next.handle(request).pipe( tap(() => {},
    //   (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
      //     this.router.navigate(['login']);
    //      return;
    //     }
    //   }
    // }));
  // };
  }


  addAuthHeader(request) {
    const token = localStorage.getItem('token');
    // console.log(bearer);
    if (token != null) {
      return request.clone({
        setHeaders: {
          Authentication: `Bearer ${token}`,
        },
      });
    }
    return request;
  }

  //       },
  //     });
  //   }

  // headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + tokenVal),
  // // authReq = request.clone({
  // let addToken = this.addToken(authReq);
  // console.log(JSON.stringify(addToken));

  //   return next.handle(request).pipe(
  //     catchError((err) => {
  //       if (err.status === 401) {
  //         console.log('From Interceptor, Unauthorized ');
  //       }
  //       const error = err.error.message || err.statusText;
  //       console.log(err);
  //       console.log('From Interceptor ' + err.error.message);
  //       return throwError(error);
  //     })
  //   );
  //   // return request;
  // }

  // private addToken(request: HttpRequest<any>) {
  //   const tokenVal = localStorage.getItem('token');
  //   console.log(tokenVal);

  //   if (tokenVal) {
  //     return request.clone({
  //       headers: request.headers.append('Authentication', 'Bearer ' + tokenVal),
  //       // },
  //     });
  //   }
  //   console.log(JSON.stringify(request));
  //   debugger;

  //   return request;
  //   console.log(JSON.stringify(request));
  // }

  // private async saveToken(token: any) {
  //   const res = await this.sharedServ.setToken(token);
  //   console.log(JSON.stringify(res));
  //   return res;
  // }
}
