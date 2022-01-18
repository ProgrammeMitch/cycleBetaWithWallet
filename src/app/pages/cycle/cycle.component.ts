import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cycle } from 'src/app/models/cycle.model';
import { Wallet } from 'src/app/models/wallet.model';
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {

  cycles: Cycle;
  wallet: Wallet;

  constructor(private cycleService: CycleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cycles = params['_id']
      this.cycleService.getCycleDetails(params._id).subscribe((cycleDetails: Cycle) => {
        this.cycles = cycleDetails;
      })
    })


    this.cycleService.getCycles().subscribe((cycles: Cycle) => {
      this.cycles = cycles;

    })
  }

  getDetails(str: string) {
    //console.log(str)
    this.cycleService.getCycleDetails(str).subscribe((cycleDetails: Cycle) => {
      this.wallet = cycleDetails[0].wallet
      return this.wallet;
    })
    console.log(this.wallet)
  }

}
