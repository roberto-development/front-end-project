import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostCardComponent } from './post-card/post-card.component';
import { MatCardModule } from '@angular/material/card';
import { UserDashboardComponent } from './user-dashboard.component';

@NgModule({
  declarations: [UserDashboardComponent, PostCardComponent],

  imports: [CommonModule, SharedModule, FormsModule, MatCardModule],
})
export class UserDashboardModule {}
