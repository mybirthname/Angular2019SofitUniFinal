import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IOrder } from '../../dto/IOrder';
import { Subscription, Observable } from 'rxjs';
import { IAppState, getOrderLoading, getOrderListCollection } from 'src/app/+store';
import { Store } from '@ngrx/store';
import { OrderEdit, OrderNew } from 'src/app/+store/order/actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  
  loading$:Observable<boolean>;
  form:FormGroup;
  orderItem:IOrder;
  orderId:string;

  sb:Subscription;

  constructor(private fb:FormBuilder, 
    private store:Store<IAppState>,
    private router:Router,
    private activatedRoute:ActivatedRoute) {

      
      this.orderId = this.activatedRoute.snapshot.params["id"];

      this.form = this.fb.group({
        nrIntern: ['', [Validators.required, Validators.minLength(6)]],
        title: ['', [Validators.required, Validators.minLength(6)]],
        status:['',[Validators.required]],
        deliveryDate: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phone: ['', [Validators.required]]
      });


     }

     settingOrderValues(){
      if(!this.orderId)
        return;

      this.loading$ = this.store.select(getOrderLoading);


      this.sb = this.store.select(getOrderListCollection)
        .subscribe(data=> {
 
          this.orderItem = data.filter(o=> o._id == this.orderId)[0];

          this.form.get('nrIntern').setValue(this.orderItem.nrIntern);
          this.form.get('title').setValue(this.orderItem.title);
          this.form.get('status').setValue(this.orderItem.status);
          this.form.get('deliveryDate').setValue(this.orderItem.deliveryDate);
          this.form.get('address').setValue(this.orderItem.address);
          this.form.get('phone').setValue(this.orderItem.phone);
        });

     }

    ngOnInit() {
      this.settingOrderValues();
    }

    ngOnDestroy(): void {
      if(this.sb != null)
        this.sb.unsubscribe();
    }
  

    edit(){
      this.store.dispatch(new OrderEdit({id:this.orderId, entity:this.form.value}));

    } 

    create(){
      this.store.dispatch(new OrderNew({entity:this.form.value}));
    }

    back(){
      this.router.navigate(["/order"]);
    }
}
