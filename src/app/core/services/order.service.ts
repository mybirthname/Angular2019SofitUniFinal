import { Injectable } from '@angular/core';
import { IOrder } from 'src/app/order/dto/IOrder';
import { BaseBO } from './BaseBO';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoreModule } from '@angular/flex-layout';
import { environment } from 'src/environments/environment';
import * as MagicStrings from 'src/app/shared/magic-strings';

@Injectable({
  providedIn: CoreModule
})
export class OrderService extends BaseBO<IOrder> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.additionalUrl = `appdata/${environment.appKey}/Order`;

    this.httpParams = {
      list:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      create:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      delete:new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType),
      edit: new HttpParams().set(MagicStrings.AuthenticationTypeName, MagicStrings.KinveyAuthenticationType)

    }

    

  }
}
