import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as MagicStrings from 'src/app/shared/magic-strings';
import { ILoginCredentials } from '../../user/dto/ILoginCredentials';
import { environment } from 'src/environments/environment';
import { CoreModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map,tap} from 'rxjs/operators';
import { IUser } from 'src/app/user/dto/IUser';


@Injectable({
  providedIn: CoreModule
})
export class UserService {

  constructor(private httpClient:HttpClient) {
   }

   logIn(credentials:ILoginCredentials):Observable<Object>{
    const paramsObject = new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.BasicAuthenticationType)

    return this.httpClient
              .post(`user/${environment.appKey}/login`, credentials, {params:paramsObject})
              .pipe(tap(response=>{
                localStorage.setItem(MagicStrings.UserName, response['username']);
                localStorage.setItem(MagicStrings.Token, response['_kmd']['authtoken']);
                localStorage.setItem(MagicStrings.UserId, response['_id']);
                localStorage.setItem(MagicStrings.IsSuperAdmin, response['IsAdmin']);

                
              }));
   }

   logOut(){
      localStorage.removeItem(MagicStrings.UserName);
      localStorage.removeItem(MagicStrings.Token);
      localStorage.removeItem(MagicStrings.UserId);
      localStorage.removeItem(MagicStrings.IsSuperAdmin);
   }


   create(user:IUser):Observable<IUser>{
    const paramsObject = new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.BasicAuthenticationType)
    
    return this.httpClient
            .post<IUser>(`user/${environment.appKey}`, user, {params:paramsObject});
    
  }

  

}
