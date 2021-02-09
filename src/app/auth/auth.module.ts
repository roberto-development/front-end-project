import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
// import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';


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
    SharedModule
  ]
})
export class AuthModule { }
