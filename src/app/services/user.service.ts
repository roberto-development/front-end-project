import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/User.model";
import { Account } from "../models/Account.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { kStringMaxLength } from "buffer";

@Injectable({
  providedIn: 'root',
})

/*
RxJS Subject >> special type of Observable that allows values to be multicasted
                to many Observers. While plain Observables are unicast (each subscribed
                Observer owns an independent execution of the Observable), Subjects are multicast.
*/

export class UserService implements OnInit {

  accountsList = new Subject<Account[]>();
  passwordResetter: Account;

  // private accountSubject: BehaviorSubject<Account>;
  public accountObservable: Observable<Account>;

  rootUrl = environment.rootUrl;
  private accountUrl: string;
  constructor(
    private http: HttpClient, 
    private router: Router
    ) {
    this.accountUrl = 'http://localhost:8080/api'
    // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    // this.user = this.userSubject.asObservable();
  }

ngOnInit() {}



createAccount(account: Account) {

  return this.http.post<User>(environment.rootUrl + `/sign-up`, account);
}

public login(account: Account) {
  // localStorage.setItem('account', JSON.stringify(account));
  // localStorage.setItem('user', JSON.stringify(account.user));
  console.log();
    
  return this.http.post<Account>(this.accountUrl + `/login`, account);

}

public getAccountId(id: number): Observable<Account> {
  return this.http.get<Account>(`${this.accountUrl}/${id}`);
}

// private getAccount() {
//   return this.http.post<Account>(this.accountUrl + '/profile/id');
// }

public isLoggedIn() {
  let jwtHelper = new JwtHelperService();

  // get the token from the localStorage as we have to work on this token.
  let token = localStorage.getItem('token');

  // check whether if token have something or it is null.
  if(!token)
  {
    return false;
  }

  // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accept a string value which is nothing but token.

  if(token)
  {
    let expirationDate = jwtHelper.getTokenExpirationDate(token);

    // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.

    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;    
  }   

}

public findAll(): Observable<Account[]> {
  return this.http.get<Account[]>(this.accountUrl);
}

public save(account: Account) {
  return this.http.post<Account>(this.accountUrl, account);
}

logout()
{
  // Remove the token from the localStorage.
  localStorage.removeItem('token');

  this.router.navigate(['/auth']);

}

// getUser(id: number) {
//   let url = this.rootUrl + '/users/1';
//   return this.http.get<JSON>(url);
// }

// login(account: Account) {
//   // return this.http.post<Account>(environment.rootUrl + `/login`, account);
//   return this.http.post<Account>(environment.rootUrl + `/login`, account).pipe(map(account=> {
//     localStorage.setItem('account', JSON.stringify(account));

//     // this.accountSubject.next(account);
//     return account;
//   }));
//     // store user details and jwt token in local storage to keep user logged in between page refreshes
// }

// public save(account: Account) {
//   return this.http.post<Account>(this.usersUrl, account);
// }

resetPassword(account: Account) {
  return this.http.post<Account>(
    environment.rootUrl + '/reset-password',
    account
  );
}

// logout() {
//   // remove user from local storage and set current user to null
//   localStorage.removeItem('user');
//   this.userSubject.next(null);
//   this.router.navigate(['/account/login']);
// }



}
