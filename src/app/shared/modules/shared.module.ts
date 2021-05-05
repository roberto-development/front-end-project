import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafePipe } from 'src/app/pipe/safe.pipe';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner/loading-spinner.component';
import { ModalFormComponent } from '../modal/modal-form/modal-form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { SharedRoutingModule } from '../shared-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingSpinnerComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ResetPasswordComponent,
    ModalFormComponent,
    SafePipe
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent,
    LoadingSpinnerComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ResetPasswordComponent,
    SafePipe,
    MaterialModule,
  ],
})
export class SharedModule {}
