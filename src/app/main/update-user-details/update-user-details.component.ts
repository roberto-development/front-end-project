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
  user: User = new User();

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.updatingAccount = false;
    this.toUpdateUserDetail = this.authenticationService.loggedInUser
    this.toUpdateUserId = this.authenticationService.loggedInUser.id
    console.log(this.toUpdateUserId);
    

    console.log(this.toUpdateUserDetail);
    

  }

  updateUserDetails(f: FormGroup) {
    // this.updatingAccount = true;
    
    
    // const newNome = f.value.nome;
    // const newCognome = f.value.cognome;
    // const newDdn = f.value.ddn;
    // const newCountry = f.value.country;

    // // const 
    // this.toUpdateUserDetail.newNome = newNome;
    // this.toUpdateUserDetail.newCognome = newCognome;
    // this.toUpdateUserDetail.newDataDiNascita = newDdn;
    // this.toUpdateUserDetail.newCountry = newCountry;
    // console.log(this.toUpdateUserId);
    
    // this.toUpdateUserDetail.id = this.toUpdateUserId;

    // this.accountWithUserUpdated.userDTO = this.toUpdateUserDetail;
    // console.log('accountWithUserUpdated');
    
    // console.log(this.accountWithUserUpdated);
    
    // this.authenticationService.updateUserDetails(this.accountWithUserUpdated)
    // .subscribe(
    //  (result : User) =>  {
    //    this.authenticationService.loggedInUser = result
    //    localStorage.setItem('userUptd', JSON.stringify(result));
    //    this.router.navigate(['/profile'])
    //   }
    //   )
// user: User = new User();
    console.log(this.user);
    
    const inputName = f.value.nome;
    const inputSurname = f.value.cognome;
    const inputDdn = f.value.ddn;
    const inputCountry = f.value.country;

    
    this.user.id = this.toUpdateUserDetail.id;
    this.user.nome = inputName;
    this.user.cognome = inputSurname;
    this.user.dataDiNascita = inputDdn;
    this.user.country = inputCountry;

    
    console.log(this.user);

    this.authenticationService.updateUser(this.user)
    .subscribe(
      (result: User) => {
        this.authenticationService.loggedInUser = result
        this.router.navigate(['/profile'])
      }
      )  
    }

  
}

