import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AuthModule } from './auth/auth.module';
import { TokenInterceptor } from './token-interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MainWrapperModule } from './main-wrapper/main-wrapper.module';
import { WrapperComponent } from './main-wrapper/main-wrapper.component';

@NgModule({
  declarations: [AppComponent, WrapperComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    BrowserAnimationsModule,
    SharedModule,
    MainWrapperModule,
    // MDBBootstrapModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
