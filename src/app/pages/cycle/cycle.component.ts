import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cycle } from 'src/app/models/cycle.model';
import { Wallet } from 'src/app/models/wallet.model';
import { CycleService } from 'src/app/services/cycle.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {

  cycles: Cycle;
  wallet: Wallet;
  myWallet: Wallet;
  check = false;
  cycleId: string;

  constructor(private walletService: WalletService, private cycleService: CycleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cycles = params['cycleId']
      this.cycleService.getCycleDetails(params.cycleId).subscribe((cycleDetails: Cycle) => {
        this.cycles = cycleDetails;
      })
    })


    this.cycleService.getCycles().subscribe((cycles: Cycle) => {
      this.cycles = cycles;
    })
  }

  getDetails(str: string) {
    this.cycleId = str;
    this.cycleService.getCycleDetails(str).subscribe((cycleDetails: Cycle) => {
      if (cycleDetails[0].wallet.length < 4) {
        this.check = true;
      }
      this.wallet = cycleDetails[0].wallet
      return this.wallet;
    })
  }

  joinCycle() {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
        this.cycleService.joinCycle(this.cycleId, {wallet: wallet[0] }).subscribe(() => {
          console.log('Data added successfully!');
          alert('joined Cycle Succesfully');
          this.router.navigate(['cycle'])
        })

    })
  }
}