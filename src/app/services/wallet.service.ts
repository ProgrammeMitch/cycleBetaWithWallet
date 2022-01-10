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

  getWallet() {
    return this.webReqService.get('wallet');
  }
}