import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://heroku-api-link.herokuapp.com/';
   }

   get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
   }

   login(username: string, password: string) {
     return this.http.post(`${this.ROOT_URL}/users/login`,
      { username, password },
       { observe: 'response'})
   }

   signup(username: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users`,
     { username, password },
      { observe: 'response'})
  }

   post(uri: string, payload: Object) {
     return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
   }

   patch(uri: string, payload: Object) {
     return this.http.patch(`${this.ROOT_URL}/${uri}`, payload, { responseType: 'text' })
   }
   
   delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`)
  }
}