import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from 'src/app/models/wallet.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  wallet: Wallet;

  constructor(private walletService: WalletService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
      console.log(this.wallet)
    })
  }

  navigate() {
    this.router.navigate(['wallet', this.wallet[0]._id, 'my-cycles'])
  }
}
