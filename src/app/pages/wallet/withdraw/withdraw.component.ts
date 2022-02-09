import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  withdraw: FormGroup;
  wallet: Wallet;

  constructor(private walletService: WalletService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.withdraw = this.fb.group({
      withdrawAmount: ['', Validators.required]
    })
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    })
  }

  withdrawer() {
    console.log(this.withdraw.value.withdrawAmount)
    this.walletService.getWallet().subscribe((wallet) => {
      let walletAmount = Number(wallet[0].walletAmount) - Number(this.withdraw.value.withdrawAmount)
      this.walletService.updateWallet(this.wallet[0]._id, { walletAmount: walletAmount }).subscribe(() => {
        this.walletService.updateWallet(this.wallet[0]._id + '/transactions', {
          transactions: {
            transactionId: Math.random() * 100 + 'dbt',
            date: new Date(),
            depositAmount: Number(this.withdraw.value.withdrawAmount),
            action: 'DEBIT',
            holder: 'WALLET',
            newBalance: walletAmount
          }
        }).subscribe(() => {
          this.wallet[0].walletAmount = walletAmount;
          console.log("withdrawal succesful")
          this.router.navigate(['wallet'])
        })
      })
    })

  }

  get touched() {
    if (this.withdraw.value.withdrawAmount) {
      return true
    }
  }

  get onlyNumbers() {
    if (this.withdraw.value.withdrawAmount) {
      let zero = this.withdraw.value.withdrawAmount * 0
      if (zero !== 0) {
        return true
      }
    }
  }

  get disableApproval() {
    if (Number(this.withdraw.value.withdrawAmount == 0)) {
      return true
    } else if ((Number(this.wallet[0].walletAmount) - Number(this.withdraw.value.withdrawAmount) < 0)) {
      return true
    } else {
      return false
    }
  }

  
}
