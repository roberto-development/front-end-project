import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';

const TOKEN_HEADER_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  // private isRefreshing = false;
  tokenInterceptor: string;
  constructor(private sharedServ: SharedService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

      request = this.addAuthHeader(request);
      console.log(JSON.stringify(request));
      // return next.handle(request).pipe(
      //       catchError((err) => {
      //         if (err.status == 401) {
      //           console.log('From Interceptor, Unauthorized ');
      //           this.router.navigate[('/login')];
      //         }
      //         const error = err.error.message || err.statusText;
      //         console.log(err);
      //         console.log('From Interceptor ' + err.error.message);
      //         return throwError(err);
      //       })
      //     );
      return next.handle(request);
  }

  addAuthHeader(request) {
    const bearer = localStorage.getItem('token');
    console.log(bearer);
    if (bearer != null) {
      return request.clone({
        setHeaders: {
          Authentication: 'Bearer ' + bearer,
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
