import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  incorrectConfirmedPass: boolean;
  error: string;

  constructor(
    private userService: UserService,
    private route: Router,
    private SharedService: SharedService
  ) {}

  ngOnInit() {
    this.incorrectConfirmedPass = false;
  }

  resetPassword(f: NgForm) {
    let emailAccount = f.value.accountEmail;
    console.log(emailAccount);
    let oldPwd = f.value.oldPassword;
    let newPwd = f.value.newPassword;
    let newPassConfirmation = f.value.newConfirmedPass;

    if (newPwd !== newPassConfirmation) {
      this.incorrectConfirmedPass = true;
      console.log(`Incorrect password !!`);
    } else if (newPassConfirmation === newPassConfirmation) {
      const newPassword = newPwd.toString();
      this.SharedService.resetPasswordAccount.email = emailAccount;
      this.SharedService.resetPasswordAccount.password = oldPwd;
      this.SharedService.resetPasswordAccount.newPassword = newPassword;
      this.SharedService.resetPassword(
        this.SharedService.resetPasswordAccount
      ).subscribe((result: Account) => {
        if (result.password) {
          this.route.navigate(['/login']);
        } else {
          this.error = 'probably a server problem, try later ';
        }
      });
    }
    //     .toPromise()
    //     .then((result) => {
    //       if (result.password) {
    //         this.route.navigate(['/app/sign-in']);
    //       } else {
    //         this.error = 'probably a server problem, try later ';
    //       }
    //     })
    //     .catch((err) => {
    //       this.error = err.message;
    //     });
    // }
  }
}
