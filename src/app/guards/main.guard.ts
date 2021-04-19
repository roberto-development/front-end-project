import { Injectable, OnInit } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class MainGuard implements OnInit, CanActivate {
  // logic for auth user
  // return true or false

  constructor(
    private router: Router,
    private sharedService: SharedService,
    public jwtHelper: JwtHelperService
  ) {}

  ngOnInit() {}

  public isLogged(): boolean {
    let token = localStorage.getItem('token');

    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      this.router.navigate['/login'];
      return false;
    }
    // sfrutto per gestire l'avanzamento di canActivate
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const token = this.sharedService.getToken();

    // se loggato return true altrimenti false e torna alla login
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
