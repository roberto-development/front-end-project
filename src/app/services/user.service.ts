import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AccountLogin } from '../models/Account.model';
import { Post } from '../models/Post.model';
import { CategoriaPost } from '../models/CategoriaPost.model';
import { ExcelDTO } from '../models/ExcelDTO.model';

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
  return this.http.get<any>(environment.rootUrl + '/users/export/excel', { responseType: 'arraybuffer' as 'json' });
  }

  getCSV() {
    return this.http.get<any>(environment.rootUrl + '/users/export/csv').toPromise();
  }

  getPdfFile() {
    return this.http.get<any>(environment.rootUrl + '/users/export/pdf', {responseType:'arraybuffer' as 'json'}
    ).subscribe(response => this.downLoadFile(response, "application/pdf"));
  }

  getExcelFile() {
    return this.http.get<any>(environment.rootUrl + '/exportExcel', {responseType:'arraybuffer' as 'json'}
     ).subscribe(response => this.downLoadFile(response, "application/vnd.ms-excel"));
    }


/**
 * Method is use to download file.
 * @param data - Array Buffer data
 * @param type - type of the document.
 */
downLoadFile(data: any, type: string) {
  console.log(data);

    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
}


  getResponseEntityExcelDTO() {
    return this.http.get<ExcelDTO>(environment.rootUrl + '/excel').toPromise();
  }

  getCategoria(id): Observable<CategoriaPost> {
    return this.http.post<CategoriaPost>(
      environment.rootUrl + '/getCategoria',
      id
    );
  }
}
function downLoadFile(data: any, any: any, type: any, string: any) {
  throw new Error('Function not implemented.');
}

