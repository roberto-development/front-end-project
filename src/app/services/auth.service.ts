import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/Account.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedInUser : User
  // login   isLoggedIn  Logout 
  // LoggedInUser 

  constructor(private http: HttpClient, private router: Router) {}

  public login(account: Account) : Observable<User> {
    return this.http.post<User>(environment.rootUrl + `/login`, account);
  }


}
