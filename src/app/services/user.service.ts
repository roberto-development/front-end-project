import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AccountLogin } from '../models/Account.model';
import { Post } from '../models/Post.model';
import { CategoriaPost } from '../models/CategoriaPost.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    // private sharedService: SharedService,
    private http: HttpClient,
    private router: Router
  ) {}

  public findAll(): Observable<AccountLogin[]> {
    return this.http.get<AccountLogin[]>(environment.rootUrl);
  }

  logout() {
    localStorage.removeItem('token');
    // this.sharedService.loggedInUser = null;
    this.router.navigate(['login']);
  }

  getPost(): Observable<Post[]> {
    return this.http.get<any>(environment.rootUrl + '/getPosts');
  }

  getExcel() {
  return this.http.get<any>(environment.rootUrl + '/users/export/excel')
  }

  getCategoria(id): Observable<CategoriaPost> {
    return this.http.post<CategoriaPost>(
      environment.rootUrl + '/getCategoria',
      id
    );
  }
}
