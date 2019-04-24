import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../../dto/IOrder';
import { Router } from '@angular/router';
import { IAppState, getOrderListCollection, getOrderLoading } from 'src/app/+store';
import { Store } from '@ngrx/store';
import { OrderList, OrderDelete } from 'src/app/+store/order/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource$:Observable<IOrder[]>;
  columnsToDisplay = ['nrIntern', 'title', 'user', 'status', 'deliveryDate', '_id'];
  loading$:Observable<boolean>;

  constructor(private store:Store<IAppState>, private router:Router) { 
    store.dispatch(new OrderList(null));
  }

  ngOnInit() {
    this.loading$ = this.store.select(getOrderLoading);
    this.dataSource$ = this.store.select(getOrderListCollection);
  }

  deleteRecord(id:string){
    this.store.dispatch(new OrderDelete({id}));
  }

}
