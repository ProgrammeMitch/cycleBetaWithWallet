import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CycleComponent } from './pages/cycle/cycle.component';
import { NewCycleComponent } from './pages/cycle/new-cycle/new-cycle.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FundWalletComponent } from './pages/wallet/fund-wallet/fund-wallet.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { MyCyclesComponent }from './pages/wallet/my-cycles/my-cycles.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'wallet', component: WalletComponent},
  { path: 'cycle', component: CycleComponent},
  { path: 'cycle/:cycleId', component: CycleComponent},
  { path: 'new-cycle', component: NewCycleComponent},
  { path: 'welcome', component: WelcomeComponent},  
  { path: 'wallet/:id', component: FundWalletComponent},
  { path: 'wallet/:id/my-cycles', component: MyCyclesComponent},
  { path: 'adminprivateaccess', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
