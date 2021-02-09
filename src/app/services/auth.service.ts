import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
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

  // user = new BehaviourSubject<User>(null);
  // bev subj. helps us to ensure that we can get access to the user even if in this part of the app 
  checkLogin : boolean = false;
  loggedInUser : User = null 

  passwordResetter: string;
  resetPasswordAccount: Account = new Account;

  constructor(private http: HttpClient, private router: Router) {}

  public login(account: Account) : Observable<User> {
    return this.http.post<User>(
      environment.rootUrl + `/login`,
       account);
  }

  public createAccount(account: Account) : Observable<User> {
    return this.http.post<User>(
      environment.rootUrl + `/register`, 
      account)
  }

  resetPassword(account: Account): Observable<Account> {
    return this.http.put<Account>(
      environment.rootUrl + '/update',
      account
    );
  }

  public updateUser(user: User) : Observable<User> {
    return this.http.put<User>(
      environment.rootUrl + '/userUpdate',
      user);
  }

  public updateUserDetails(account: Account) : Observable<User> {
    return this.http.put<User>(
      environment.rootUrl + '/updateUser',
     account)
  }

  isLogged () : boolean {
    return !!localStorage.getItem('account')
  }
    
}