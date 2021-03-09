import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  declarations: [NavbarComponent, LoadingSpinnerComponent, LeftMenuComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavbarComponent, LoadingSpinnerComponent, LeftMenuComponent],
})
export class SharedModule {}
