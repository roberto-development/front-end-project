import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
// import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AuthenticationComponent,
    // SignInComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
