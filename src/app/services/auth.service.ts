import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/Account.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private loggedAccount= new BehaviorSubject<Account>(<Account>{});
get isLoggedIn() {
  return this.loggedIn.asObservable(); // {2}
}
  // isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(account: Account) {
    const newAccount = new Account();
    newAccount.email = account.email;
    newAccount.password = account.password;
    return this.http.post<Account>(environment.rootUrl + `/login`, account, {
      observe: 'response'
    }
    );
  }


  // logout()
  // {
  //   // Remove the token from the localStorage.
  //   // localStorage.removeItem('token');

  //   this.router.navigate(['/auth']);

  // }
}
