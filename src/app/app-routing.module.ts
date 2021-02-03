import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // { path: 'auth', component:AuthenticationComponent },
  // { path: 'sign-in', component: SignInComponent },
  // { path: 'sign-up', component: SignUpComponent },
  // { path: 'reset-password', component: ResetPasswordComponent },
  // { path: 'home-page', component: HomepageComponent },
  // { path: 'user-list', component: UserListComponent },
  // {path: '', redirectTo: 'auth'},


  {
    path: '', loadChildren: () =>
  import('./auth/auth.module').then(
    (m) => m.AuthModule
    )
  },

  {
    path: 'main', loadChildren: () =>
    import('./main/main.module').then(
      (m) => m.MainModule
    )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
