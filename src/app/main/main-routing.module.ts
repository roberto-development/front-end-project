import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  {path: "home" , component : WrapperComponent },
  { path:'home-page', component: HomeComponent },
  { path:'profile', component: ProfileComponent }
  // { path:'profile/:id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
