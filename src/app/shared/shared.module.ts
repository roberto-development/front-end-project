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
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
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
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule {}
