import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';
import { FriendshipComponent } from './profile/friendship/friendship.component';
import { PostComponent } from './profile/post/post.component';
import { LeftMenuComponent } from '../shared/left-menu/left-menu.component';
// import { UploadFileComponent } from './profile/upload-file/upload-file.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    WrapperComponent,
    UpdateUserDetailsComponent,
    FriendshipComponent,
    PostComponent,
    // UploadFileComponent
  ],
  imports: [CommonModule, MainRoutingModule, FormsModule, SharedModule],
  providers: [AuthGuard],
})
export class MainModule {}
