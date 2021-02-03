import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { WrapperComponent } from './wrapper/wrapper.component';
// import { HomepageComponent } from '../components/home-page/homepage.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    WrapperComponent,
    ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule {}
