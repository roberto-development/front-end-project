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
  accountWithUserUpdated: Account = new Account();
  toUpdateUserDetail: User = new User();
  toUpdateUserId: number;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.updatingAccount = false;
    this.toUpdateUserDetail = this.authenticationService.loggedInUser
    this.toUpdateUserId = this.authenticationService.loggedInUser.id
    console.log(this.toUpdateUserId);
    

    console.log(this.toUpdateUserDetail);
    

  }

  updateUserDetails(f: FormGroup) {
    this.updatingAccount = true;
    
    
    const newNome = f.value.nome;
    const newCognome = f.value.cognome;
    const newDdn = f.value.ddn;
    const newCountry = f.value.country;

    // const 
    this.toUpdateUserDetail.nome = newNome;
    this.toUpdateUserDetail.cognome = newCognome;
    this.toUpdateUserDetail.dataDiNascita = newDdn;
    this.toUpdateUserDetail.country = newCountry;
    console.log(this.toUpdateUserId);
    
    this.toUpdateUserDetail.id = this.toUpdateUserId;

    this.accountWithUserUpdated.userDTO = this.toUpdateUserDetail;
    this.authenticationService.updateUserDetails(this.accountWithUserUpdated)
    .subscribe(
     (result : User) =>  {
       this.authenticationService.loggedInUser = result
       localStorage.setItem('userUptd', JSON.stringify(result));
       this.router.navigate(['/profile'])
      }
      )

}
}

