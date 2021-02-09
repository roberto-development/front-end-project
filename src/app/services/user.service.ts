import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import { Account } from "../models/Account.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { AuthenticationService } from "./auth.service";

@Injectable({
  providedIn: 'root',
})

export class UserService {

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient, 
    private router: Router
    ) {}


public findAll(): Observable<Account[]> {
  return this.http.get<Account[]>(environment.rootUrl);
  }

logout() {
  localStorage.removeItem('account');
  this.authService.loggedInUser = null;
  this.router.navigate(['/auth']);
  }

}
