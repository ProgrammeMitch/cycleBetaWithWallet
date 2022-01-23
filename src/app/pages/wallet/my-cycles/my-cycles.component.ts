import { Component, OnInit } from '@angular/core';
import { Cycle } from 'src/app/models/cycle.model';
import { Wallet } from 'src/app/models/wallet.model';
import { CycleService } from 'src/app/services/cycle.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-my-cycles',
  templateUrl: './my-cycles.component.html',
  styleUrls: ['./my-cycles.component.scss']
})
export class MyCyclesComponent implements OnInit {

  cycles: Array<String>;
  cycleId: string;
  wallet: Wallet;
  wallets = [];
  lengthOfCycles: any;
  lengthOfWallet: any;

  constructor(private walletService: WalletService, private cycleService: CycleService) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.cycles = wallet[0].cycle;
    })
  }

  getDetails(str: string) {
    this.cycleId = str;
    this.wallets = [];
    this.cycleService.getCycleDetails(str).subscribe((cycleDetails: Cycle) => {
      this.walletService.getWallet().subscribe((wallet: Wallet) => {
        this.lengthOfCycles = wallet[0].cycle.length;
        this.lengthOfWallet = cycleDetails[0].wallet.length;
        this.wallet = cycleDetails[0].wallet
        console.log(cycleDetails)
        for (let i = 0; i < this.lengthOfWallet; i++) {
          if (this.wallet[i] !== null) {
            this.wallets.push(this.wallet[i])
          }
        }
        console.log(this.wallets)
        return this.wallet;
      })
    })
  }
}
