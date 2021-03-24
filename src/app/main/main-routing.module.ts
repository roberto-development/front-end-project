import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from '../guards/main.guard';
import { FriendshipComponent } from './profile/friendship/friendship.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WrapperComponent, canActivate: [MainGuard] },
  // { path:'home-page', component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [MainGuard] },
  {
    path: 'update-user-details',
    component: UpdateUserDetailsComponent,
    canActivate: [MainGuard],
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
