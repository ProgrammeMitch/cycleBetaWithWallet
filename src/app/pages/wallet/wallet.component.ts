import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from 'src/app/models/wallet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { tranasactions } from 'src/app/models/transactions.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  wallet: Wallet;
  transactions: tranasactions;

  constructor(private walletService: WalletService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
      this.transactions = wallet[0].transactions
      console.log(this.transactions)
      
    })
  }

  navigate() {
    this.router.navigate(['wallet', this.wallet[0]._id, 'my-cycles'])
  }
}
