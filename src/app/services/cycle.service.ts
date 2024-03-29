import { Injectable } from '@angular/core';
import { Cycle } from '../models/cycle.model';
import { Wallet } from '../models/wallet.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor(private webReqService: WebRequestService) { }

  createCycle(cycle: Cycle) {
    //create a new cycle in the db
    return this.webReqService.post('cycles', cycle)
  }

  joinCycle(cycleId: String, wallet: Object) {
    return this.webReqService.patch(`cycles/${cycleId}`, wallet)
  }
  
  getCycles() {
    //get all cycles
    return this.webReqService.get('cycles')
  }
  getCycleDetails(cycleId: string) {
    //get all details (wallets) within each cycle
    return this.webReqService.get(`cycles/${cycleId}`)
  }

  deleteCycle(cycleId: string) {
    return this.webReqService.delete(cycleId)
  }
}
