import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  countries: string[] = [
    'Italy',
    'France',
    'Germany',
    'Spain',
    'England'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  signUp(f: FormGroup) {
    const username = f.value.username;
    const password = f.value.password;
    const nome = f.value.nome;
    const cognome = f.value.cognome;
    const ddn = f.value.ddn;
    const country = f.value.country;

    console.log(f);

  }
}
