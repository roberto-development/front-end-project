import { Component, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/Account.model';
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
  constructor(private userService: UserService) { }

  ngOnInit() {

  
  }

  // getProfile(account: Account) {

  // }



  logout()
  {
    // Remove the token from the localStorage.
    localStorage.removeItem('token');

    this.userService.logout();

  }

}
