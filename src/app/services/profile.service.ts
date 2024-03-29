import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { WebRequestService } from './web-request.service'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private webReqService: WebRequestService) { }

  getUserDetails(userId: string) {
    return this.webReqService.get(`users/${userId}`);
  }

  getAllUsers() {
    return this.webReqService.get(`users`);
  }

  updateUserDetails(userId: string, update: Object) {
    return this.webReqService.patch(`users/${userId}`, update);
  }

  deleteWallet(userId: string) {
    return this.webReqService.delete(userId)
  }
}