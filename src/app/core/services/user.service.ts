import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as MagicStrings from 'src/app/shared/magic-strings';
import { ILoginCredentials, ILoginResponse } from '../../user/dto/ILoginCredentials';
import { environment } from 'src/environments/environment';
import { CoreModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/user/dto/IUser';

import { BaseBO } from './BaseBO';


@Injectable({
  providedIn: CoreModule
})
export class UserService extends BaseBO<IUser>{


  constructor(public httpClient:HttpClient) {
    super(httpClient);
    this.additionalUrl = `user/${environment.appKey}`;
    this.queryParams = '?hard=true';
    
    this.httpParams = {
      list:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      create:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.BasicAuthenticationType),
      delete:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      edit: new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType)
    } 

   }

   logIn(credentials:ILoginCredentials):Observable<ILoginResponse>{
    const paramsObject = new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.BasicAuthenticationType)
    return this.httpClient
              .post<ILoginResponse>(`user/${environment.appKey}/login`, credentials, {params:paramsObject});
   }
   

}
