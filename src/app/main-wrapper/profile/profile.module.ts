import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FriendshipComponent } from './friendship/friendship.component';
import { PostComponent } from './post/post.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ProfileComponent,
    FriendshipComponent,
    PostComponent,
    PostCardComponent,
  ],

  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    MatCardModule,
  ],
})
export class ProfileWrapperModule {}
