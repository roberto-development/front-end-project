import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.scss']
})
export class UpdateUserDetailsComponent implements OnInit {
  updatingAccount: boolean;
  toUpdateUserDetail: User = new User();
  toUpdateUserId: number;
  user: User = new User();

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.updatingAccount = false;
    this.toUpdateUserDetail = this.authenticationService.loggedInUser
    this.toUpdateUserId = this.authenticationService.loggedInUser.id

  }

  updateUserDetails(f: FormGroup) {
    
    const inputName = f.value.nome;
    const inputSurname = f.value.cognome;
    const inputDdn = f.value.ddn;
    const inputCountry = f.value.country;
    
    this.user.id = this.toUpdateUserDetail.id;
    this.user.nome = inputName;
    this.user.cognome = inputSurname;
    this.user.dataDiNascita = inputDdn;
    this.user.country = inputCountry;

    this.authenticationService.updateUser(this.user)
    .subscribe(
      (result: User) => {
        this.authenticationService.loggedInUser = result
        this.router.navigate(['/profile'])
      })
    }
}

