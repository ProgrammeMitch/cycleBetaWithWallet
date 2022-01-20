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
  updateBy = 10;
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
    this.walletService.updateWallet(this.wallet[0]._id, this.fundWallet.value).subscribe(() => {
      this.wallet[0].walletAmount = this.fundWallet.value;
      console.log("funds have been added")
      console.log(this.wallet)
      this.router.navigate(['wallet'])
    })
  }

}
