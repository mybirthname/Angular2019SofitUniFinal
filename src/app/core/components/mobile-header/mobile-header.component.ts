import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, getIsAuthenticated, getIsSuperAdmin, getAuthUserName } from 'src/app/+store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/+store/auth/actions';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  isLogged$: Observable<boolean>
  isSuperAdmin$:Observable<boolean>

  
  constructor(private store:Store<IAppState>) { 
    this.isLogged$ = store.select(getIsAuthenticated);
    this.isSuperAdmin$ = store.select(getIsSuperAdmin);

  }

  ngOnInit() {
  }

  logOut(){
    this.store.dispatch(new LogOut(null));
  }

}
