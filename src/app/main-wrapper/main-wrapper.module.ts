import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { MainWrapperRoutingModule } from './main-wrapper-routing.module';
import { ProfileWrapperModule } from './profile/profile.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MainWrapperRoutingModule,
    SharedModule,
    FormsModule,
    ProfileWrapperModule,
    UserDashboardModule,
  ]
})
export class MainWrapperModule {}
