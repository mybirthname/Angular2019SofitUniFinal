import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { BaseBO } from './BaseBO';
import { IArticle } from '../../catalog/dto/ICatalog'
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as MagicStrings from 'src/app/shared/magic-strings';

@Injectable({
  providedIn: 'root'
})
export class CatalogService extends BaseBO<IArticle> {
 

  constructor(public httpClient:HttpClient) {
    super(httpClient);
    this.additionalUrl = `appdata/${environment.appKey}/Catalog`;

    this.httpParams = {
      list:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      create:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      delete:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      edit: new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType)

    }

   }
}
