import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebReqInterceptor } from '../app/services/web-request.interceptor';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CycleComponent } from './pages/cycle/cycle.component';
import { NewCycleComponent } from './pages/cycle/new-cycle/new-cycle.component';
import { FundWalletComponent } from './pages/wallet/fund-wallet/fund-wallet.component';
import { MyCyclesComponent } from './pages/wallet/my-cycles/my-cycles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    WalletComponent,
    WelcomeComponent,
    CycleComponent,
    NewCycleComponent,
    FundWalletComponent,
    MyCyclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: WebReqInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
