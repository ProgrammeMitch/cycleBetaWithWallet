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

  updateWallet(walletId: string, obj: Object) {
    return this.webReqService.patch('wallet/'+walletId, obj)
  }

  getWallet() {
    return this.webReqService.get('wallet');
  }

  getWalletDetails(walletId: string) {
    return this.webReqService.get('wallet/'+walletId);
  }

  deleteWallet(walletId: string) {
    return this.webReqService.delete(walletId)
  }
}