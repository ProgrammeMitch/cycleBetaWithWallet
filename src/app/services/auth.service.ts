import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private webservice: WebRequestService, private router: Router) { 
    
  }

  login(username: string, password: string) {
    return this.webservice.login(username, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {

        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      console.log('Logged in')
      })
    )
  }

  signup(username: string, password: string) {
    return this.webservice.signup(username, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {

        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      console.log('Succesfully Signed Up')
      })
    )
  }

  logout(){
    this.removeSession();

    this.router.navigate(['/login']);
  }

  private setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token')
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken)
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token')
  }

  getUserId() {
    return localStorage.getItem('user-id')
  }

  getNewAccessToken() {
    return this.http.get(`${this.webservice.ROOT_URL}/users/me/access-token`, {
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        '_id': this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'))
      })
    )
  }
}
