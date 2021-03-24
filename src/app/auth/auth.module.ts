import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
// import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    // SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    LoginComponent,
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
