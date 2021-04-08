import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainWrapperRoutingModule } from './main-wrapper-routing.module';
import { ProfileWrapperModule } from './profile/profile.module';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MainWrapperRoutingModule,
    SharedModule,
    FormsModule,
    ProfileWrapperModule,
  ],
})
export class MainWrapperModule {}
