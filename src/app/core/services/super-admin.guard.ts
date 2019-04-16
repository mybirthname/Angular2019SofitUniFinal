import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as MagicStrings from 'src/app/shared/magic-strings';
import { CoreModule } from '../core.module';
import { IAppState, getSuperAdmin, getIsSuperAdmin } from 'src/app/+store';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: CoreModule
})
export class SuperAdminGuard implements CanActivate, CanLoad {

  constructor(private store: Store<IAppState>){
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.store.select(getIsSuperAdmin);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.store.select(getIsSuperAdmin);
   }
}
