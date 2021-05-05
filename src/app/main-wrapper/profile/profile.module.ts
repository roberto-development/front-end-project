import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FriendshipComponent } from './friendship/friendship.component';
import { PostComponent } from './post/post.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserDashboardModule } from '../user-dashboard/user-dashboard.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

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
    MaterialModule,
    UserDashboardModule
  ],
})
export class ProfileWrapperModule {}
