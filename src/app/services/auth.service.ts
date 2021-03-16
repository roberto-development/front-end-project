import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Account } from '../models/Account.model';
import { Image } from '../models/Image.model';
import { TokenDTO } from '../models/TokenDTO.model';
import { User } from '../models/User.model';
import { UserDTO } from '../models/UserDTO.model';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // user = new BehaviourSubject<User>(null);
  // bev subj. helps us to ensure that we can get access to the user even if in this part of the app
  checkLogin: boolean = false;

  isLoggedIn: boolean = false;

  token: string;

  // private readonly JWT_TOKEN = 'JWT_TOKEN';
  // private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  passwordResetter: string;
  resetPasswordAccount: Account = new Account();

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedServ: SharedService
  ) {}

  // public login(account: Account): Observable<User> {
  //   return this.http.post<User>(environment.rootUrl + `/login`, account);
  // }

  public login(account: Account): Observable<UserDTO> {
    return this.http.post<UserDTO>(environment.rootUrl + `/getUser`, account);
  }

  // public login(account: Account): Observable<User> {
  //   return this.http.post<User>(environment.rootUrl + `/getUser`, account);
  // }

  public createAccount(account: Account): Observable<User> {
    return this.http.post<User>(environment.rootUrl + `/register`, account);
  }

  resetPassword(account: Account): Observable<Account> {
    return this.http.put<Account>(environment.rootUrl + '/update', account);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(environment.rootUrl + '/userUpdate', user);
  }

  public updateUserDetails(account: Account): Observable<User> {
    return this.http.put<User>(environment.rootUrl + '/updateUser', account);
  }

  isLogged(): boolean {
    this.checkLogin = true;
    return !!localStorage.getItem('currentUser');
  }

  public getToken(): any {
    return this.sharedServ.getToken();
  }
  // private doLoginUser(id: number, tokens: any) {
  //   this.loggedInUser.id = id;
  //   this.storeTokens(tokens);
  // }

  // storeTokens(tokens: any) {
  //   localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
  //   localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  // }

  // public isAuthenticated(): boolean {
  // get the token
  // const token = this.getToken();
  // return a boolean reflecting
  // whether or not the token is expired
  // return tokenNotExpired(null, token);
  // }
  // }

  // method called from profile to upload image not present before in db
  // public uploadPhoto(file: File) {
  public uploadPhoto(profilePicture: Image) {
    return this.http.put(environment.rootUrl + '/updateImage', profilePicture, {
      reportProgress: true,
      observe: 'events',
    });
  }

  // ...
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

  public getProfilePic(userId: UserDTO): Observable<any> {
    return this.http.post(environment.rootUrl + '/getImage', userId, {
      responseType: 'text',
    });
  }
}
