import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isLoading: boolean = false;
  // loggedUser: boolean;
  
  constructor() { }

  ngOnInit(): void {
    // this.loggedUser = false;
  }

}
