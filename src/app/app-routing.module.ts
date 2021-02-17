import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    loadChildren: () =>
  import('./auth/auth.module').then(
    (m) => m.AuthModule
    )
  },

  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () =>
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
