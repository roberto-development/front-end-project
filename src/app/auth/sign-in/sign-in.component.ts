import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { SharedService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  isLoading = false;

  errore: boolean = false;
  errorMessage;

  formSignIn: FormGroup;
  // formSignIn: FormGroup= new FormGroup({
  //   email: new FormControl(null, [Validators.required]),
  //   password: new FormControl(null,[Validators.required])
  // });

  constructor(private router: Router, private SharedService: SharedService) {}

  ngOnInit() {
    this.initForm;
  }

  private async initForm() {
    this.initLoadForm;
  }

  private initLoadForm() {
    this.formSignIn = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(''),
    });
  }

  signIn(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    let signedInAccount = new Account();
    signedInAccount.email = email;
    signedInAccount.password = password;

    console.log(signedInAccount);
    this.isLoading = true;

    this.SharedService.login(signedInAccount).subscribe(
      (result: User) => {
        localStorage.setItem('account', JSON.stringify(result.id));
        this.SharedService.loggedInUser = result;
        this.SharedService.checkLogin = true;
        this.router.navigate(['/profile']);
        console.log('arrived');
        this.isLoading = false;
      },
      (error) => {
        error.message;
        console.log(error);
        this.errorMessage = 'An error occurred!';
        this.errore = true;
        this.isLoading = false;
      }
    );
  }

  // setData(email: string, password: string) {
  //   let signedInAccount = new Account();
  //     signedInAccount.email = email
  //     signedInAccount.password = password
  // }
}
