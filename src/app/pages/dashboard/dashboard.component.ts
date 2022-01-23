import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { Wallet } from 'src/app/models/wallet.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { WalletService } from 'src/app/services/wallet.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  profile: Profile;
  newAccountBalance = 1;
  wallet: Wallet;
  boolean: false;

  constructor(private walletService: WalletService, private profileService: ProfileService, private route: ActivatedRoute, private authServive: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.profileService.getUserDetails(this.authServive.getUserId()).subscribe((user: Profile) => {
        //console.log(user)
        this.profile = user;
      })
    })
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    })
  }

  createWallet(str: string) {
    if (Array.isArray(this.wallet) && this.wallet.length) {
      if (this.wallet[0].walletId === str) {
        console.log('walletExists')
      } else {
        this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null }).subscribe((wallet: Wallet) => {
          console.log(wallet);
        })
      }
    } else {
      this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null }).subscribe((wallet: Wallet) => {
      })
    }
  }
}
