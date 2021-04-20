import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainWrapperRoutingModule } from './main-wrapper-routing.module';
import { ProfileWrapperModule } from './profile/profile.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MainWrapperRoutingModule,
    SharedModule,
    FormsModule,
    ProfileWrapperModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    UserDashboardModule,
  ],
})
export class MainWrapperModule {}
