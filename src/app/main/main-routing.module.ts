import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FriendshipComponent } from './profile/friendship/friendship.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WrapperComponent, canActivate: [AuthGuard] },
  // { path:'home-page', component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'update-user-details',
    component: UpdateUserDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'friendship',
    component: FriendshipComponent,
  },
  // { path: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
