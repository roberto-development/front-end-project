import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { UserDTO } from 'src/app/models/UserDTO.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  isLoading = false;
  formSignIn: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(''),
  });

  errore: boolean = false;

  constructor(private router: Router, private sharedServ: SharedService) {}

  ngOnInit() {
    if (this.sharedServ.isLogged()) {
      this.isSubmitted = true;
      this.router.navigate(['/profile']);
      // this.authServ.loggedInUser;
    }
  }

  onSubmit() {
    let loginAccount = new Account();
    loginAccount.email = this.formSignIn.get('email').value;
    loginAccount.password = this.formSignIn.get('password').value;
    console.log(loginAccount);
    this.sharedServ.login(loginAccount).subscribe(
      (result: UserDTO) => {
        this.sharedServ.setToken(JSON.stringify(result.token));

        console.log(result);
        this.sharedServ.setToken(result.token);
        this.sharedServ.setCurrentUser(result);

        this.sharedServ.loggedInUser = result;
        this.sharedServ.checkLogin = true;
        this.router.navigate(['profile']);
        this.isLoading = false;
      },
      (error) => {
        error.message;
        console.log('An error occured!' + error);
        this.errore = true;
        this.isLoading = false;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
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
