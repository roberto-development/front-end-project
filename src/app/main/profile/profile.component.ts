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
  loadProfile: boolean;
  constructor(private userService: UserService , private authService : AuthenticationService) { }

  ngOnInit() {
    this.user = this.authService.loggedInUser
    console.log(this.user);
    console.log(this.user);
    
  }


  logout()
  {

    this.userService.logout();

  }


}
