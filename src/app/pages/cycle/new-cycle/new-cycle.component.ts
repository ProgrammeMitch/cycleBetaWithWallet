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
  disable = true

  constructor(private fb: FormBuilder, private cycleService: CycleService, private route: ActivatedRoute, private router: Router, private walletService: WalletService) { }

  ngOnInit(): void {
    this.cycleForm = this.fb.group({
      cycleDuration: ['', Validators.required],
      cycleAmount: ['', Validators.required],
      cycleStartDate: [''],
      frequency: ['', Validators.required]
    })

    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      this.wallet = wallet;
    });
  }

  createNewCycle() {
    console.log(this.cycleForm.value.cycleAmount)
      this.cycleService.createCycle({ 
        cycleDuration: this.cycleForm.value.cycleDuration, 
        cycleAmount: this.cycleForm.value.cycleAmount, 
        cycleStartDate: this.cycleForm.value.cycleStartDate,
        frequency: this.cycleForm.value.frequency,
        wallet: this.wallet 
      }).subscribe((cycle: Cycle) => {
        this.walletService.updateWallet(this.wallet[0]._id + '/my-cycle', {cycle: cycle._id} ).subscribe(() => {
        console.log(cycle);
        console.log('Data added successfully!')
        this.router.navigate(['cycle'])
        alert('Cycle Created')
        })
      }, (err) => {
        console.log(err)
      })
  }

  get onlyNumbersCycleDuration() {
    if (this.cycleForm.value.cycleDuration) {
      let zero = this.cycleForm.value.cycleDuration * 0
      if (zero !== 0) {
        return true
      }
    }
  }

  get onlyNumbersCycleAmount() {
    if (this.cycleForm.value.cycleAmount) {
      let zero = this.cycleForm.value.cycleAmount * 0
      if (zero !== 0) {
        return true
      }
    }
  }
}
