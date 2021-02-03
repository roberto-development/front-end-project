import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  incorrectConfirmedPass: boolean;
  error: string;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.incorrectConfirmedPass = false;
  }

  resetPassword(f: NgForm) {

    const newPwd = f.value.newPassword;
    const newPassConfirmation = f.value.newConfirmedPass;

    if (newPwd !== newPassConfirmation) {
      this.incorrectConfirmedPass = true;
      console.log(`Incorrect password !!`);

    } else if (newPassConfirmation === newPassConfirmation) {

      const newPassword = newPwd.toString();
      this.userService.passwordResetter.password = newPassword;
      this.userService
        .resetPassword(this.userService.passwordResetter)
        .toPromise()
        .then((result) => {
          if (result.password) {
            this.route.navigate(['/app/sign-in']);
          } else {
            this.error = 'probably a server problem, try later ';
          }
        })
        .catch((err) => {
          this.error = err.message;
        });
    }
  }



}
