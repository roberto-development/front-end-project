import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/Account.model';
import { User } from '../models/User.model';
import { UserDTO } from '../models/UserDTO.model';
import { AuthenticationService } from './auth.service';

// ---const---
const TOKEN: string = 'token';
const CURRENT_USER: string = 'currentUser';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // -----
  isLoggedIn: boolean = false;

  private currentUser: User;
  checkLogin: boolean = false;

  private token: any;
  loggedInUser: UserDTO = null;

  passwordResetter: string;
  resetPasswordAccount: Account = new Account();

  constructor(private authService: AuthenticationService) {}

  // -----
  login(account) {
    return this.authService.login(account);
  }

  updateUser(user: User) {
    return this.authService.updateUser(user);
  }

  setToken(token) {
    localStorage.setItem(TOKEN, token);
    this.token = token;
    console.log(this.token);
  }

  uploadPhoto(profilePicture) {
    return this.authService.uploadPhoto(profilePicture);
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem(TOKEN);
    }
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem(TOKEN);
  }

  resetPassword(account): Observable<Account> {
    return this.authService.resetPassword(account);
  }

  isLogged(): boolean {
    // token sia presente
    return this.token ? true : false;
  }

  createAccount(newAccount) {
    return this.authService.createAccount(newAccount);
  }

  setCurrentUser(userdata) {
    localStorage.setItem(CURRENT_USER, userdata);
    // non c'è bisogno di settare il toke, è legato all'utenza

    // this.currentUser = JSON.parse(userdata) as User;
    this.currentUser = userdata as UserDTO;
  }

  getCurrentUser() {
    if (!this.currentUser) {
      let userdatastring = localStorage.getItem(CURRENT_USER);
      this.currentUser = userdatastring
        ? (JSON.parse(userdatastring) as User)
        : null;
    }
    return this.currentUser;
  }

  clearCurrentUser() {
    this.currentUser = null;
    localStorage.removeItem(CURRENT_USER);
  }

  public getUser() {
    const userParsed = window.localStorage.getItem(TOKEN);
    if (userParsed) {
      return JSON.parse(userParsed);
    }
  }

  public getProfilePic(userId: UserDTO) {
    return this.authService.getProfilePic(userId);
  }

  clearAllSession() {
    this.clearCurrentUser();
    this.clearToken();
  }
}
