import { Component, OnInit } from '@angular/core';
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

  constructor(private walletService: WalletService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    })
  }

  fundWallet() {
    //console.log(this.wallet);
    this.wallet[0].walletAmount = this.updateBy;
    //console.log(this.wallet[0]._id)
    this.walletService.updateWallet(this.wallet[0]._id, this.wallet).subscribe(() => {
      
      console.log(this.wallet)
    })
  }

}
