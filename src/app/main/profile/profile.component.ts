import { Component, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  
  constructor(private userService: UserService , private autheService : AuthenticationService) { }

  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem('account'));
    // stored as User because from BE returns object User
    // this.user = accountData;
    this.user = this.autheService.loggedInUser
    console.log(this.user);
    
  }


  logout()
  {
    // Remove the token from the localStorage.

    this.userService.logout();

  }

}
