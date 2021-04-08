import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendshipComponent } from './friendship/friendship.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'friendship',
        component: FriendshipComponent,
      },
      {
        path: 'post',
        component: PostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
