import { Injectable } from '@angular/core';
import { Wallet } from '../models/wallet.model';
import { WebRequestService } from './web-request.service'; 

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private webReqService: WebRequestService) { }

  createWallet(wallet: Wallet) {
    return this.webReqService.post('wallet', wallet);
  }

  updateWallet(walletId: string, obj: Wallet) {
    //console.log('wallet/'+walletId)
    return this.webReqService.patch('wallet/'+walletId, obj)
  }

  getWallet() {
    return this.webReqService.get('wallet');
  }
}