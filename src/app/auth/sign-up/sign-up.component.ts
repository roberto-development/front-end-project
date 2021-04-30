import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountLogin } from 'src/app/models/Account.model';
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

  formRegister: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(''),
    nome: new FormControl(''),
    cognome: new FormControl(''),
    ddn: new FormControl(''),
    country: new FormControl('')
  });

  selectedFile: File;

  constructor(private authService: SharedService, private router: Router) {}

  ngOnInit() {
    this.creatingAccount = false;
  }

  async onSubmit() {
    this.creatingAccount = true;
    let signUpAccount = new AccountLogin();
    signUpAccount.email = this.formRegister.get('email').value;
    signUpAccount.password = this.formRegister.get('password').value;

    let newUser = new UserDTO();
    newUser.nome = this.formRegister.get('nome').value;
    newUser.cognome = this.formRegister.get('cognome').value;
    newUser.dataDiNascita = this.formRegister.get('ddn').value;
    newUser.country = this.formRegister.get('country').value;

    signUpAccount.userDTO = newUser;

    this.authService.createAccount(signUpAccount).subscribe(
      (result: UserDTO) => {
        console.log(result);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        this.errore = true;
      }
    );
  }
}
