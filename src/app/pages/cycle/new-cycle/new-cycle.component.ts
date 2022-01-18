import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cycle } from 'src/app/models/cycle.model';
import { Wallet } from 'src/app/models/wallet.model';
import { CycleService } from 'src/app/services/cycle.service';
import { WalletService } from '../../../services/wallet.service'

@Component({
  selector: 'app-new-cycle',
  templateUrl: './new-cycle.component.html',
  styleUrls: ['./new-cycle.component.scss']
})
export class NewCycleComponent implements OnInit {

  cycles: Cycle;
  wallet: Wallet;
  cycleForm: FormGroup;

  constructor(private fb: FormBuilder, private cycleService: CycleService, private route: ActivatedRoute, private router: Router, private walletService: WalletService) { }

  ngOnInit(): void {
    this.cycleForm = this.fb.group({
      cycleAmount: ['', Validators.required]
    })

    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    });
  }

  createNewCycle() {
    console.log(this.cycleForm.value.cycleAmount)
    this.cycles = this.cycleForm.value.cycleAmount
    this.cycleService.createCycle({cycleAmount: this.cycleForm.value.cycleAmount, wallet: this.wallet}).subscribe((cycle: Cycle) => {
      console.log(cycle);
      console.log('Data added successfully!')
      this.router.navigate(['cycle', cycle._id ])
      alert('Cycle Created')
    }, (err) => {
      console.log(err)
    })
  }
}
