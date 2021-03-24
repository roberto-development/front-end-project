import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { AccountLogin } from '../models/Account.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private sharedService: SharedService,
    private http: HttpClient,
    private router: Router
  ) {}

  public findAll(): Observable<AccountLogin[]> {
    return this.http.get<AccountLogin[]>(environment.rootUrl);
  }

  logout() {
    // localStorage.removeItem('token');
    this.sharedService.loggedInUser = null;
    this.router.navigate(['login']);
  }
}
