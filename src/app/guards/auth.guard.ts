import { Injectable, OnInit } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements OnInit, CanActivate {
  // logic for auth user
  // return true or false

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private sharedServ: SharedService
  ) {}

  ngOnInit() {
    console.log('Auth Guard activated!');
  }

  isLogged() {
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
    const token = this.sharedServ.getToken;
    // se loggato return true altrimenti false e torna alla login
    if (token) {
      console.log(token);

      return true;
    }
    if (this.sharedServ.isLogged()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
