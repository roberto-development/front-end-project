import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // account: Account();

  errore: boolean = false;
  account: Account;

  // userList: UserListComponent;


  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
this.account = new Account();
   }

  ngOnInit() {
    // if((this.userService.isLoggedIn()) )
    // {
    //     this.router.navigate(['/profile' , localStorage.getItem('id')]);
    // }
    // else
    // {
    //     this.router.navigate(['/sign-in']);
    // }
  }

  signIn(f: NgForm) {


    const email = f.value.email;
    const password = f.value.password;

    this.account.email = email;
    this.account.password = password;
    console.log(email);
    console.log(password);

    // this.userService.login(this.account).subscribe(result => this.gotoUserList());
  return  this.userService.login(this.account).subscribe(
      result =>  {
        localStorage.setItem('account', JSON.stringify(result));
        // localStorage.setItem('user', JSON.stringify(result.user));
      console.log(result);
      
      this.goToHomepage();
    },
    error => {
      error.message;
      console.log(error);
      this.errore = true;
      // se 404 o bc gestire meglio errore
    });

  //   result => {
  //     console.log(result);
  //     localStorage.setItem('token',result['token']);
  //     this.router.navigate(['/profilo',f.controls['email'].value],{
  //       state:{username:f.controls['email']}
  //     });
  //   },
  //   error => {
  //     error.message;
  //     console.log(error)
  //     this.errore = true;
  //   }
  // )
}



    // this.userService.save(this.account).subscribe(result => this.gotoUserList());
  


  goToHomepage() {
    this.router.navigate(['/home']);

  }

  // goToUserList() {
  //   this.router.navigate(['/user-list'])
  // }

}


//
//  login response with token
/*
response => {
            let result =  response.json();

            if(result > 0)
            {
              let token = response.headers.get("Authorization");

              localStorage.setItem("token" , token);
              localStorage.setItem("id" , result);

              this.router.navigate(['/profile', result]);
            }
            if(result == -1)
            {
              alert("please register before login Or Invalid combination of Email and password");
            }

        },
        error => {
            console.log("Error in authentication");
        }
      );
  }
*/
