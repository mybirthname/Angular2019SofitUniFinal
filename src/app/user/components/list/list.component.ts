import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../../dto/IUser';
import { UserService } from 'src/app/core/services/user.service';
import { Subscription, Observable } from 'rxjs';
import { IAppState, getUserListColl, getUserLoading } from 'src/app/+store';
import { Store } from '@ngrx/store';
import { UserList, UserDelete } from 'src/app/+store/user/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  dataSource$:Observable<IUser[]>;
  columnsToDisplay = ['firstName', 'lastName', 'username', 'email', '_id'];
  loading$:Observable<boolean>;

  constructor(private store:Store<IAppState>) { 
    
    store.dispatch(new UserList(null));

  }

  ngOnInit() {
    //selectors are not working, question ? 
    this.loading$ = this.store.select(getUserLoading);
    this.dataSource$ = this.store.select(getUserListColl);

  }

  deleteRecord(id:string){
    this.store.dispatch(new UserDelete({id}));
  }

}
