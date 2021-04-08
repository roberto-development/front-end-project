import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MainGuard } from './guards/main.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },

  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './main-wrapper/main-wrapper.module#MainWrapperModule',
      },
      // { path:'home-page', component: HomeComponent},
      {
        path: 'profile',
        loadChildren:
          './main-wrapper/profile/ ./main-wrapper/MainWrapperModule#',
        canActivate: [MainGuard],
      },
      // {
      //   path: 'update-user-details',
      //   component: UpdateUserDetailsComponent,
      //   canActivate: [MainGuard],
      // },
      // {
      //   path: 'friendship',
      //   component: FriendshipComponent,
      //   canActivate: [MainGuard],
      // },
    ],
    // component: WrapperComponent,
    // canActivate: [MainGuard],
  },
  // { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
