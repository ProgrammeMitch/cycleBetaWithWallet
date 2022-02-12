import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from 'src/app/models/wallet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { tranasactions } from 'src/app/models/transactions.model';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  wallet: Wallet;
  profile: Profile;
  pendingTransactionExists: Boolean;
  transactions: tranasactions;

  constructor(private authService: AuthService, private profileService: ProfileService, private walletService: WalletService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
      this.transactions = wallet[0].transactions
      console.log(this.transactions)
    })

    this.profileService.getUserDetails(this.authService.getUserId()).subscribe((profile: Profile) => {
      this.profile = profile;
      this.pendingTransactionExists = profile[0].pendingTransfer;
    })
  }

  navigate() {
    this.router.navigate(['wallet', this.wallet[0]._id, 'my-cycles'])
  }

  navigateWithdraw() {
    this.router.navigate(['wallet', this.wallet[0]._id, 'withdraw'])
  }
}
