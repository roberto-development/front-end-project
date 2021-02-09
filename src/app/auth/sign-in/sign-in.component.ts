import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  errore: boolean = false;
  errorMessage;

  constructor(
    private router: Router,
    private authenticationService : AuthenticationService) {
   }


  signIn(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    let signedInAccount = new Account();
    signedInAccount.email = email
    signedInAccount.password = password

    console.log(signedInAccount);
    

     this.authenticationService.login(signedInAccount)
     .subscribe(
      (result : User) =>  {
        localStorage.setItem('account', JSON.stringify(result.id));
        this.authenticationService.loggedInUser = result
        this.authenticationService.checkLogin = true;
        this.router.navigate(['/profile'])
        console.log("arrived");
      },
      error => {
      error.message;
      console.log(error);
      this.errorMessage = 'An error occurred!';
      this.errore = true;
       }
    );

}
 
}

