import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountLogin } from 'src/app/models/Account.model';
import { UserDTO } from 'src/app/models/UserDTO.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  userDTOprova: UserDTO;
  isLoading = false;
  formSignIn: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(''),
  });

  errore: boolean = false;

  constructor(
    private router: Router,
    private sharedServ: SharedService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.sharedServ.isLogged()) {
      this.isSubmitted = true;
      this.router.navigate(['/profile']);
      // this.authServ.loggedInUser;
    }
  }

  async onSubmit() {
    let loginAccount = new AccountLogin();
    loginAccount.email = this.formSignIn.get('email').value;
    loginAccount.password = this.formSignIn.get('password').value;
    try {
      const value = await this.authenticationService.login(loginAccount);
      localStorage.setItem('token', value.token);
      this.sharedServ.setToken(value.token);

      this.router.navigate(['/profile']);
      this.isLoading = false;
    } catch (error) {
      error.message;
      console.log('An error occured!' + error);
      this.errore = true;
      this.isLoading = false;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  getIdUser() {
    return JSON.parse(localStorage.getItem('token'));
  }

  onRefresh() {
    const token = localStorage.getItem('token');
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  // if (
  //   responseData.headers.get('Authentication') &&
  //   responseData.body.id
  // ) {
  //   localStorage.setItem(
  //     'token',
  //     responseData.headers.get('Authentication')
  //   );
  //   this.authService._authenticatedUser.next(responseData.body);
  //   this.authService.token = responseData.headers.get('Authentication');
  //   setTimeout(() => {
  //     this.combination = false;
  //     // this.loading = false;
  //     this.router.navigate(['/home']);
  //   }, 900);
  // } else {
  //   this.combination = true;
  //   this.loading = false;
  // }
}
