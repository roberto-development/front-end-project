import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/auth.service';

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

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    let loginAccount = new Account();
    loginAccount.email = this.formSignIn.get('email').value;
    loginAccount.password = this.formSignIn.get('password').value;
    console.log(loginAccount);
    this.authenticationService.login(loginAccount).subscribe(
      (result: User) => {
        localStorage.setItem('account', JSON.stringify(result.id));
        this.authenticationService.loggedInUser = result;
        this.authenticationService.checkLogin = true;
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
}
