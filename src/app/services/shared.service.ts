import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountLogin } from '../models/Account.model';
import { Post } from '../models/Post.model';
import { TokenDTO } from '../models/TokenDTO.model';
import { User } from '../models/User.model';
import { UserDTO } from '../models/UserDTO.model';
import { AuthenticationService } from './auth.service';
import { UserService } from './user.service';

// ---const---
const TOKEN: string = 'token';
const CURRENT_USER: string = 'currentUser';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  subjectShared = new Subject<boolean>();
  // inizializzato già a new

  // -----
  isLoggedIn: boolean = false;

  private currentUser: User;
  checkLogin: boolean = false;

  private token: string;
  loggedInUser: UserDTO = null;

  passwordResetter: string;
  resetPasswordAccount: AccountLogin = new AccountLogin();

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private jwtHelper: JwtHelperService
  ) {}

  updateUser(user: User) {
    return this.authService.updateUser(user);
  }

  setToken(token) {
    if (token !== null) {
      localStorage.setItem('token', token);
      this.token = token;
      console.log(this.token);

    } else {
      let getItem = localStorage.getItem('token');
      console.log(JSON.stringify(getItem));
    }
  }

  uploadPhoto(profilePicture) {
    return this.authService.uploadPhoto(profilePicture);
  }

  public getToken(): boolean {
    const tok = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(tok)) {
      return true;
        // this.router.navigate(['/login']);
      }
      return false;
    // return localStorage.getItem('token');
  }

  clearToken() {
    if (localStorage.getItem(TOKEN)) {
      localStorage.removeItem(TOKEN);
    }
    if (localStorage.getItem(CURRENT_USER))
      localStorage.removeItem(CURRENT_USER);
  }

  resetPassword(account): Observable<Account> {
    return this.authService.resetPassword(account);
  }

  isLogged(): boolean {
    return this.token ? true : false;
  }

  createAccount(newAccount) {
    return this.authService.createAccount(newAccount);
  }

  public getUserInfo() {
    this.authService.getUserInfo().subscribe((res) => {
      console.log(res);
      return res;
    });
  }

  setCurrentUser(userdata) {
    // this.currentUser = JSON.parse(userdata) as User;
    this.loggedInUser = userdata as UserDTO;
  }

  // getCurrentUser() {
  //   if (!this.currentUser) {
  //     let userdatastring = localStorage.getItem(CURRENT_USER);
  //     this.currentUser = userdatastring
  //       ? (JSON.parse(userdatastring) as User)
  //       : null;
  //   }
  //   return this.currentUser;
  // }

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

  public getProfilePic() {
    return this.authService.getProfilePic();
  }

  clearAllSession() {
    // this.clearCurrentUser();
    this.clearToken();
  }

  posts: Post[];

  getPost(): Post[] {
    this.userService.getPost().subscribe((result: Post[]) => {
      console.log(result);

      this.posts = result;
      console.log(this.posts);
    });
    return this.posts;
  }
}
