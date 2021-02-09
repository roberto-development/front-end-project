import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements OnInit, CanActivate {
  // logic for auth user 
  // return true or false

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) {}

    ngOnInit() {
      console.log('Auth Guard activated!');
      
    }

  canActivate(): boolean {
    if(!this.authService.isLogged()) {
      this.router.navigate(['/auth'])
      return false;
    } else {
      return true;
    }
  }

}
