import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,

  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    CommonModule
  ]
})
export class AuthModule { }
