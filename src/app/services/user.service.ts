import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import { User } from "../models/User.model";
import { Account } from "../models/Account.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})


export class UserService {
  passwordResetter: string;

  constructor(
    private http: HttpClient, 
    private router: Router
    ) {}


createAccount(account: Account) {
  return this.http.post<User>(environment.rootUrl + `/sign-up`, account);
}

// public login(account: Account) {
//   return this.http.post<Account>(environment.rootUrl + `/login`, account);
// }

public findAll(): Observable<Account[]> {
  return this.http.get<Account[]>(environment.rootUrl);
}


logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/auth']);

}

resetPassword(account: Account) {
  return this.http.post<Account>(
    environment.rootUrl + '/reset-password',
    account
  );
}


// createAccount , getAccount , updateAccount 

}
