import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationHeaderFactory } from './authentication-header.factory';
import {Store} from '@ngrx/store';
import { IAppState, getAuthToken } from '../+store';
import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{
    
    constructor(private store:Store<IAppState>){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.params.get('AuthenticationType')){
            throw new Error('AuthenticationType param is required to indicate what kind of authentication you need')
        }

        return this.store.select(getAuthToken).pipe(take(1),switchMap(token=>{
                const headers = new AuthenticationHeaderFactory().Create(req.params.get('AuthenticationType'), token);

                let cloneRequest = req.clone({
                    url: `${apiUrl}/${req.url}`,
                    params: req.params.delete('AuthenticationType'),
                    headers: headers
                });    
        
                return next.handle(cloneRequest);
            }))


    }

}