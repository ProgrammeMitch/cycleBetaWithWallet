import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cycle } from 'src/app/models/cycle.model';
import { Wallet } from 'src/app/models/wallet.model';
import { AuthService } from 'src/app/services/auth.service';
import { CycleService } from 'src/app/services/cycle.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {

  cycles: Cycle;
  wallets = [];
  wallet: Wallet;
  lengthOfWallet: Number;
  lengthOfWallets: Number;
  lengthOfCycles: Number;
  myWallet: Wallet;
  check: boolean;
  cycleId: string;
  alreadyJoined: boolean;

  constructor(private authService: AuthService, private walletService: WalletService, private cycleService: CycleService, private route: ActivatedRoute, private router: Router) { }

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

  logout() {
    this.authService.logout()
    this.router.navigate(['login'])

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
        if (this.wallets.length < 4) {
          if (this.lengthOfCycles < 2) {
            this.check = true
          } else {
            this.check = false
          }
        } else {
          this.check = false;
        }
        this.lengthOfWallets = this.wallets.length
        console.log(this.wallets)
        return this.wallet;
      })
    })
  }

  
  joinCycle() {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      console.log(wallet[0]._id)
      console.log(this.wallets)
      for (let i = 0; i < this.lengthOfWallet; i++) {
        if (this.wallets.length === 0) {
          this.cycleService.joinCycle(this.cycleId, { wallet: wallet[0] }).subscribe(() => {
            this.walletService.updateWallet(wallet[0]._id + '/my-cycle', { cycle: this.cycleId }).subscribe(() => {
              console.log('Data added successfully!');
              alert('joined Cycle Succesfully');
              this.router.navigate(['wallet'])
            })
          })
        } else if (wallet[0]._id == this.wallets[i]._id) {
          this.alreadyJoined = true;
          break;
        } else {
          this.cycleService.joinCycle(this.cycleId, { wallet: wallet[0] }).subscribe(() => {
            this.walletService.updateWallet(wallet[0]._id + '/my-cycle', { cycle: this.cycleId }).subscribe(() => {
              console.log('Else Data added successfully!');
              alert('joined Cycle Succesfully');
              this.router.navigate(['wallet'])
            })
          })
        }
      }
    })
  }

  leaveCycle(userId: String) {
    this.walletService.getWallet().subscribe((wallet: Wallet) => {
      //console.log(wallet[0]._id)
      if (wallet[0]._userId === userId) {
        this.cycleService.getCycleDetails(this.cycleId).subscribe((cycled: Cycle) => {
          let wallets = cycled[0].wallet
          let emptyRemovedArrayOfWallets = []
          for (let i = 0; i < this.lengthOfWallet; i++) {
            if (wallets[i] !== null) {
              emptyRemovedArrayOfWallets.push(wallets[i])
            }
          }
          console.log(emptyRemovedArrayOfWallets)
          for (let i = 0; i < this.lengthOfWallet; i++) {
            if (wallet[0]._id == emptyRemovedArrayOfWallets[i]._id) {
              delete emptyRemovedArrayOfWallets[i];
              console.log(emptyRemovedArrayOfWallets)
              this.cycleService.joinCycle(cycled[0]._id + '/leave-cycle', { wallet: emptyRemovedArrayOfWallets }).subscribe(() => {
                let cycle = wallet[0].cycle
                let cycleLength = wallet[0].cycle.length
                console.log(cycle);
                for (let i = 0; i < cycleLength; i++) {
                  if (cycled[0]._id == cycle[i]) {
                    cycle.splice(i, 1)
                    let newCycle: String;
                    if (cycle == []) {
                      console.log('here');
                      newCycle = null;
                    } else {
                      newCycle = cycle.toString()
                    }
                    this.walletService.updateWallet(wallet[0]._id + '/remove-cycle', {cycle: newCycle}).subscribe(() => {
                      alert('You have left the cycle Succesfully');
                      this.router.navigate(['wallet'])
                    })
                  }
                }
              })
            }
          }
        })
      }
    })


  }
}