import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { WrapperComponent } from './main-wrapper/main-wrapper.component';
import { MainWrapperModule } from './main-wrapper/main-wrapper.module';
import { SharedModule } from './shared/modules/shared.module';
import { TokenInterceptor } from './token-interceptor/token.interceptor';



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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
