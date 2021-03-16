import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account.model';
import { User } from 'src/app/models/User.model';
import { UserDTO } from 'src/app/models/UserDTO.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  creatingAccount: boolean;
  errore: boolean = false;
  countries: string[] = ['Italy', 'France', 'Germany', 'Spain', 'England'];

  selectedFile: File;

  constructor(private authService: SharedService, private router: Router) {}

  ngOnInit() {
    this.creatingAccount = false;
  }

  signUp(f: FormGroup) {
    this.creatingAccount = true;
    const email = f.value.email;
    const password = f.value.password;
    const nome = f.value.nome;
    const cognome = f.value.cognome;
    const ddn = f.value.ddn;
    const country = f.value.country;

    let newAccount = new Account();
    let newUser = new User();

    newAccount.email = email;
    newAccount.password = password;

    newUser.nome = nome;
    newUser.cognome = cognome;
    newUser.dataDiNascita = ddn;
    newUser.country = country;
    //  newUser.image = imageUpload;

    newAccount.userDTO = newUser;

    console.log(newAccount);

    this.authService.createAccount(newAccount).subscribe(
      (result: User) => {
        console.log(result);
        this.authService.loggedInUser = result;
        //  localStorage.setItem('account', JSON.stringify(result));
        console.log(result);
        //  localStorage.setItem('user', JSON.stringify(newAccount.user))
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        this.errore = true;
      }
    );
  }

  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0];
  // }

  // onUpload() {
  // let uploadData = new FormData();
  // uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

  // this.authService.uploadPhoto(this.selectedFile);
  // }
}
