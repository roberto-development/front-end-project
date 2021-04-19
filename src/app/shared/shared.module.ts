import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ModalFormComponent } from './modal/modal-form/modal-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingSpinnerComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ResetPasswordComponent,
    ModalFormComponent,
  ],
  imports: [
    SharedRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    LoadingSpinnerComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ResetPasswordComponent,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
})
export class SharedModule {}
