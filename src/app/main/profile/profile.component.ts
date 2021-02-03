import { Component, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // @Output() account: Account = {
  //   id: null, 
  //   email: '', 
  //   password: '', 
  //   user: null
  // };
  // @Output() account: Account;
  account: Account;
  user: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    let accountData: User = JSON.parse(localStorage.getItem('account'));
    // stored as User because from BE returns object User
    this.user = accountData;
    
  }


  logout()
  {
    // Remove the token from the localStorage.

    this.userService.logout();

  }

}
