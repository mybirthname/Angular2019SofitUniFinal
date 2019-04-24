import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { IAppState, getIsAuthenticated, getIsSuperAdmin, getAuthUserName, getAuthUserId } from 'src/app/+store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/+store/auth/actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  isLogged$: Observable<boolean>
  isSuperAdmin$:Observable<boolean>
  userName$: Observable<string>
  userId$: Observable<string>;
  
  constructor(private store:Store<IAppState>) { 
    this.isLogged$ = store.select(getIsAuthenticated);
    this.isSuperAdmin$ = store.select(getIsSuperAdmin);
    this.userName$ = store.select(getAuthUserName);
    this.userId$ = store.select(getAuthUserId);
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logOut(){
    this.store.dispatch(new LogOut(null));
     

  }

}
