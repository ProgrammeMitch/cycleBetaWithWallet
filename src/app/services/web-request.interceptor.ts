import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, Subject, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class WebReqInterceptor implements HttpInterceptor {

    refreshingAccessToken: boolean;

    accessTokenRefreshed: Subject<any> = new Subject();

    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        //Handle the request
        request = this.addAuthHeader(request)
        //call next and handle the response
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);

                if (error.status === 401) {
                    //if 401 (Unauthorised) error

                    //refresh access token
                    return this.refreshAccessToken().pipe(
                        switchMap(() => {
                            request = this.addAuthHeader(request);
                            return next.handle(request);
                        }),
                        catchError((err: any) => {
                           // console.log(err);
                            this.authService.logout();
                            return empty();
                        })
                    )
                }
                return throwError(error);
            })
        )
    }

    addAuthHeader(request: HttpRequest<any>) {
        const token = this.authService.getAccessToken();

        if (token) {
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            })
        }
        return request;
    }

    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new Observable(observer => {
                this.accessTokenRefreshed.subscribe(() => {
                    //this will run when the access token is refreshed
                    observer.next();
                    observer.complete();
                })
            })
        } else {
            this.refreshingAccessToken = true;
            return this.authService.getNewAccessToken().pipe(
                tap(() => {
                    console.log('Access Token Refreshed')
                    this.refreshingAccessToken = false;
                    this.accessTokenRefreshed.next()
                })
            )
        }
    }
}