import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FriendshipComponent } from './friendship/friendship.component';
import { PostComponent } from './post/post.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material/card';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { UserDashboardModule } from '../user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [
    ProfileComponent,
    FriendshipComponent,
    PostComponent,
  ],

  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    UserDashboardModule
  ],
})
export class ProfileWrapperModule {}
