import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ModalFormComponent } from './modal/modal-form/modal-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingSpinnerComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ResetPasswordComponent,
    ModalFormComponent,
  ],
  imports: [SharedRoutingModule, FormsModule],
  exports: [
    NavbarComponent,
    LoadingSpinnerComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ResetPasswordComponent,
  ],
})
export class SharedModule {}
