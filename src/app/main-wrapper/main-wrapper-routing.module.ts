import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from 'src/app/guards/main.guard';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './main-wrapper.component';
import { FriendshipComponent } from './profile/friendship/friendship.component';
import { PostComponent } from './profile/post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [MainGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [MainGuard],
      },
      {
        path: 'dashboard',
        component: UserDashboardComponent,
        canActivate: [MainGuard],
      },
      {
        path: 'update-user-details',
        component: UpdateUserDetailsComponent,
        canActivate: [MainGuard],
      },
      {
        path: 'friendship',
        component: FriendshipComponent,
        canActivate: [MainGuard],
      },

      {
        path: 'post',
        component: PostComponent,
        canActivate: [MainGuard],
      },
    ],
  },
  // { path: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainWrapperRoutingModule {}
