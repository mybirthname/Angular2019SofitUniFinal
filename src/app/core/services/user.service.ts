import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as MagicStrings from 'src/app/shared/magic-strings';
import { ILoginCredentials } from '../../user/dto/ILoginCredentials';
import { environment } from 'src/environments/environment';
import { CoreModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: CoreModule
})
export class UserService {

  constructor(private httpClient:HttpClient) {

   }

   logIn(credentials:ILoginCredentials):Observable<Object>{
     
    const paramsObject = new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.BasicAuthenticationType);

    return this.httpClient
              .post(`user/${environment.appKey}/login`, credentials, {params:paramsObject})
              .pipe(map(response=>{
                localStorage.setItem('username', response['username']);
                localStorage.setItem('token', response['_kmd']['authtoken']);
                localStorage.setItem('userId', response['_id']);
            
                return response;
              }));
   }
}
