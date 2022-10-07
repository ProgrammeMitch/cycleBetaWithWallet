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
  //a boolean to check if wallet exists
  locked: boolean;
  //a boolean to check if profile is complete
  completeProfile: boolean;


  constructor(private walletService: WalletService, private authService: AuthService, private profileService: ProfileService, private route: ActivatedRoute, private authServive: AuthService) { }

  /**
   * On init we would subscribe to the route params to activate
   * the routes 
   */
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.profileService.getUserDetails(this.authServive.getUserId()).subscribe((user: Profile) => {
        console.log(user)
        this.profile = user;
        //check if user has wallet or not
        if (user[0].wallet === undefined) {
          this.locked = true
          console.log(this.locked)
        }

        //check for NIN, BVN, Phonenumber
        if (user[0].nin && user[0].bvn && user[0].phoneNumber)  {
          this.completeProfile = true;
        }
      })
    })
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    })
  }

  //create wallet method 
  createWallet(str: string) {
    //check if user already has a wallet
    if (Array.isArray(this.wallet) && this.wallet.length) {
      //if wallet exists get the wallet. 
      if (this.wallet[0].walletId === str) {
        this.walletService.getWallet().subscribe((wallet: Wallet) => {
          this.profileService.updateUserDetails(this.authService.getUserId(), { wallet : wallet}).subscribe(() => {
            console.log(wallet);
          })
        })
        //console.log('walletExists')
      } else {
        this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null, transactions: null }).subscribe((wallet: Wallet) => {
          this.walletService.getWallet().subscribe((wallet: Wallet) => {
            this.profileService.updateUserDetails(this.authService.getUserId(), { wallet : wallet}).subscribe(() => {
              console.log(wallet);
            })
          })
        })
      }
    } else {
      this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null, transactions: null }).subscribe((wallet: Wallet) => {
        this.walletService.getWallet().subscribe((wallet: Wallet) => {
          this.profileService.updateUserDetails(this.authService.getUserId(), { wallet : wallet}).subscribe(() => {
            console.log(wallet);
          })
        })
      })
    }
  }
}
