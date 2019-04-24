



import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { Store } from '@ngrx/store';
import { IAppState, getIsAuthenticated, getAuthUserId } from 'src/app/+store';
import { take, map } from 'rxjs/operators';



@Injectable({
  providedIn: CoreModule
})
export class CurrentUserGuard implements CanActivate {

  constructor(private store:Store<IAppState>){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
        
    return  this.store.select(getAuthUserId)
                .pipe(
                    take(1), 
                    map(result=> result == next.params["id"]));
  }


}







