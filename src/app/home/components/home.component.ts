import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IAppState, getOrderLoading, getOrderListCollection, getOrderOwnCollection, getAuthUserId } from 'src/app/+store';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IOrder } from 'src/app/order/dto/IOrder';
import { OrderList, OrderOwn } from 'src/app/+store/order/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  sb:Subscription;

  constructor(private store:Store<IAppState>, private router:Router) { 

    this.sb = store.select(getAuthUserId).subscribe(id=>{
      store.dispatch(new OrderOwn(id));
    });
  }

  dataSource$:Observable<IOrder[]>;
  columnsToDisplay = ['nrIntern', 'title', 'user', 'status', 'deliveryDate'];
  loading$:Observable<boolean>;

  ngOnInit() {
    this.loading$ = this.store.select(getOrderLoading);
    this.dataSource$ = this.store.select(getOrderOwnCollection);
  }

  ngOnDestroy(): void {
    if(this.sb != null)
      this.sb.unsubscribe();
  }

}
