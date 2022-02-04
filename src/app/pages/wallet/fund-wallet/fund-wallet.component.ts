import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-fund-wallet',
  templateUrl: './fund-wallet.component.html',
  styleUrls: ['./fund-wallet.component.scss']
})
export class FundWalletComponent implements OnInit {

  wallet: Wallet;
  fundWallet: FormGroup

  constructor(private walletService: WalletService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

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
            depositAmount: Number(this.fundWallet.value.walletAmount),
            action: 'CREDIT',
            holder: 'WALLET',
            newBalance: walletAmount
          }
        }).subscribe(() => {
          this.wallet[0].walletAmount = walletAmount;
          console.log("funds have been added")
          this.router.navigate(['wallet'])
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
}
