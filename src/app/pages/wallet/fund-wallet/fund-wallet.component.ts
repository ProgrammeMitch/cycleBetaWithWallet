import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { Wallet } from 'src/app/models/wallet.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-fund-wallet',
  templateUrl: './fund-wallet.component.html',
  styleUrls: ['./fund-wallet.component.scss']
})
export class FundWalletComponent implements OnInit {

  wallet: Wallet;
  fundWallet: FormGroup;
  profile: Profile;

  constructor(
    private profileService: ProfileService, 
    private authService: AuthService, 
    private walletService: WalletService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fundWallet = this.fb.group({
      walletAmount: ['', Validators.required]
    })
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    })
  }

  fundWallets() {
    this.walletService.getWallet().subscribe((wallet) => {
      let walletAmount = Number(wallet[0].walletAmount) + Number(this.fundWallet.value.walletAmount)
      console.log(walletAmount)
      this.walletService.updateWallet(this.wallet[0]._id, { walletAmount: walletAmount }).subscribe(() => {
        this.walletService.updateWallet(this.wallet[0]._id + '/transactions', {
          transactions: {
            transactionId: Math.random() * 1000 + 'crd',
            date: new Date(),
            depositAmount: Number(this.fundWallet.value.walletAmount),
            action: 'CREDIT',
            holder: 'WALLET',
            newBalance: walletAmount
          }
          
        }).subscribe(() => {
          this.profileService.getUserDetails(this.authService.getUserId()).subscribe((profile: Profile) => {
            this.profileService.updateUserDetails(this.authService.getUserId(), { pendingTransfer: true }).subscribe(() => {
              this.profile = profile
              this.wallet[0].walletAmount = walletAmount;
              console.log("funds have been added")
              console.log(this.profile)
              this.router.navigate(['wallet'])
            })
          })
        })

      })
    })
  }

  get touched() {
    if (this.fundWallet.value.walletAmount) {
      return true
    }
  }

  get onlyNumbers() {
    if (this.fundWallet.value.walletAmount) {
      let zero = this.fundWallet.value.walletAmount * 0
      if (zero !== 0) {
        return true
      }
    }
  }

  get disableApproval() {
    if (Number(this.fundWallet.value.walletAmount == 0)) {
      return true
    } else {
      return false
    }
  }
}
