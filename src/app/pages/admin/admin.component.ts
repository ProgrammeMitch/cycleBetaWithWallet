import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cycle } from 'src/app/models/cycle.model';
import { Profile } from 'src/app/models/profile.model';
import { Wallet } from 'src/app/models/wallet.model';
import { AuthService } from 'src/app/services/auth.service';
import { CycleService } from 'src/app/services/cycle.service';
import { ProfileService } from 'src/app/services/profile.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: Profile;
  userWallet = [] //for iteration purposes
  userWallets = []
  userWalletCycle = []
  lengthOfUserObject = 0

  wallet: Wallet;
  transactions: [];
  viewTransactionTrigger: boolean;

  cycles: Cycle;
  lengthOfCycleObject = 0
  cycleWallets: any;

  viewAllUser: boolean;
  viewAllCycle: boolean;
  viewAllWallet: boolean;
  viewWalletsInCycle: boolean;

  path: FormGroup;
  pathInfo: any;
  pathfinder: boolean;

  fundWalletTrigger: boolean;
  fundWallet: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private auhtService: AuthService, private cycleService: CycleService, private walletService: WalletService) { }

  ngOnInit(): void {
    this.path = this.fb.group({
      pathName: [''],
      id: ['']
    })

    this.fundWallet = this.fb.group({
      userId: [''],
      walletId: [''],
      amount: ['']
    })

    this.profileService.getAllUsers().subscribe((users: Profile) => {
      this.users = users

      for (let key in users) {
        this.lengthOfUserObject++
      }

      for (let i = 0; i < this.lengthOfUserObject; i++) {
        this.userWallet.push(users[i].wallet)
      }

      for (let i = 0; i < this.userWallet.length; i++) {
        for (let j = 0; j < this.userWallet[i].length; j++) {
          this.userWallets.push(this.userWallet[i][j])
          this.userWalletCycle.push(this.userWallet[i][j].cycle)
        }
      }
    })

    this.cycleService.getCycles().subscribe((cycle: Cycle) => {
      this.cycles = cycle
    })

  }

  viewAllUsers() {
    this.viewAllUser = true
    this.viewAllCycle = false
    this.viewAllWallet = false
    this.viewWalletsInCycle = false;
    this.fundWalletTrigger = false;
  }

  getAllWallets() {
    console.log(this.userWallet)
    this.viewAllWallet = true;
    this.viewAllUser = false;
    this.viewAllCycle = false;
    this.viewWalletsInCycle = false;
    this.fundWalletTrigger = false;
  }

  getAllCycles() {
    console.log(this.cycles)
    this.viewAllWallet = false;
    this.viewAllUser = false;
    this.viewAllCycle = true;
    this.viewWalletsInCycle = false;
    this.fundWalletTrigger = false;
  }

  deleteWallet(str: String) {
    console.log(str)
    this.walletService.deleteWallet('wallet/' + str).subscribe(() => {

      console.log('deleted')
    })
  }

  deleteUser(str: String) {
    console.log(str)
    this.profileService.deleteWallet('user/' + str).subscribe(() => {

      console.log('deleted')
    })
  }

  deleteCycle(str: string) {

    this.cycleService.getCycleDetails(str).subscribe((cycle: Cycle) => {
      let wallets = cycle[0].wallet;
      for (let i = 0; i < wallets.length; i++) {
        if (wallets[i] == null) {
          continue
        }
        this.walletService.getWalletDetails(wallets[i]._id).subscribe((wallet: Wallet) => {
          let cyclesInWallet = wallet[0].cycle
          for (let j = 0; j < cyclesInWallet.length; j++) {
            if (str == cyclesInWallet[j]) {
              cyclesInWallet.splice(j, 1)
              console.log(cyclesInWallet)
              this.walletService.updateWallet(wallets[i]._id + '/remove-cycle', {cycle: cyclesInWallet}).subscribe(() => {
                console.log('cycle in wallet have been deleted')
              })
            }
          }
        })
      }
    })
    this.profileService.deleteWallet('cycles/' + str).subscribe(() => {
      console.log('cycle has been deleted')
    })

  }

  getWalletsInCycle(str: string) {
    this.viewWalletsInCycle = true;
    console.log(str)
    this.cycleService.getCycleDetails(str).subscribe((cycleDetails: Cycle) => {
      this.cycleWallets = cycleDetails[0].wallet;
      let cycleWalletLength = cycleDetails[0].wallet.length
      let cycleWallet = [];
      for (let i = 0; i < cycleWalletLength; i++) {
        if (this.cycleWallets[i] == null) {

        } else {
          cycleWallet.push(this.cycleWallets[i])
        }
      }
      this.cycleWallets = cycleWallet
    })
  }

  viewTransactions(str: string) {
    this.viewTransactionTrigger = true
    for (let i = 0; i < this.userWallets.length; i++) {
      if (this.userWallets[i]._id == str) {
        this.transactions = this.userWallets[i].transactions
      }
    }

  }

  getPath() {
    this.pathfinder = true
    this.viewAllWallet = false;
    this.viewAllUser = false;
    this.viewAllCycle = false;
    this.viewWalletsInCycle = false;
    this.fundWalletTrigger = false;
    if (this.path.value.pathName === 'user') {

      this.profileService.getUserDetails(this.path.value.id).subscribe((user: Profile) => {
        this.pathInfo = user
        console.log(user)
      })
    } else if (this.path.value.pathName === 'cycle') {
      this.cycleService.getCycleDetails(this.path.value.id).subscribe((cycle: Cycle) => {
        console.log(cycle)
        this.pathInfo = cycle
      })
    } else if (this.path.value.pathName === 'wallet') {
      this.walletService.getWalletDetails(this.path.value.id).subscribe((wallet: Wallet) => {
        this.pathInfo = wallet
        console.log(this.pathInfo)
      })
    }
  }

  fundWalletDisplay() {
    this.fundWalletTrigger = true
  }

  fundWallets() {
    console.log(this.fundWallet)
    this.walletService.updateWallet(this.fundWallet.value.walletId, { walletAmount: this.fundWallet.value.amount }).subscribe((wallet) => {
      this.profileService.updateUserDetails(this.fundWallet.value.userId, { pendingTransfer: false }).subscribe(() => {
        alert('Funds have been updated')
        console.log(wallet)
      })

    })
  }
}
