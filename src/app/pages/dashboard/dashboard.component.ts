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
  walletPresent: boolean;
  locked = true;

  constructor(private walletService: WalletService, private authService: AuthService, private profileService: ProfileService, private route: ActivatedRoute, private authServive: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.profileService.getUserDetails(this.authServive.getUserId()).subscribe((user: Profile) => {
        console.log(user)
        this.profile = user;
        if (user[0].wallet === undefined) {
          this.walletPresent = true
          console.log(user[0].wallet)
        }
      })
    })
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    })
  }

  
  createWallet(str: string) {
    if (Array.isArray(this.wallet) && this.wallet.length) {
      if (this.wallet[0].walletId === str) {
        this.walletService.getWallet().subscribe((wallet: Wallet) => {
          this.profileService.updateUserDetails(this.authService.getUserId(), { wallet : wallet}).subscribe(() => {
            console.log(wallet);
          })
        })
        //console.log('walletExists')
      } else {
        this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null }).subscribe((wallet: Wallet) => {
          this.walletService.getWallet().subscribe((wallet: Wallet) => {
            this.profileService.updateUserDetails(this.authService.getUserId(), { wallet : wallet}).subscribe(() => {
              console.log(wallet);
            })
          })
        })
      }
    } else {
      this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null }).subscribe((wallet: Wallet) => {
        this.walletService.getWallet().subscribe((wallet: Wallet) => {
          this.profileService.updateUserDetails(this.authService.getUserId(), { wallet : wallet}).subscribe(() => {
            console.log(wallet);
          })
        })
      })
    }
  }
}
