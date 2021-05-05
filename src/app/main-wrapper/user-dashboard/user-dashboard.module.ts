import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [UserDashboardComponent, PostCardComponent],

  imports: [CommonModule, SharedModule, MaterialModule, FormsModule, ],
})
export class UserDashboardModule {}
