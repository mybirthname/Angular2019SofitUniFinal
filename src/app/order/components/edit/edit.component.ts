import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IOrder } from '../../dto/IOrder';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  
  loading:boolean;
  form:FormGroup;
  orderItem:IOrder;
  orderId:string;

  createSb:Subscription;
  editSb:Subscription;
  getSb:Subscription;

  constructor(private fb:FormBuilder, 
    private orderService:OrderService, 
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

      this.settingOrderValues();

     }

     settingOrderValues(){
      if(!this.orderId)
        return;

      this.loading = true;

      this.getSb = this.orderService.getById(this.orderId)
        .subscribe(data=> {
 
          this.orderItem = data;
          this.form.get('nrIntern').setValue(this.orderItem.nrIntern);
          this.form.get('title').setValue(this.orderItem.title);
          this.form.get('status').setValue(this.orderItem.status);
          this.form.get('deliveryDate').setValue(this.orderItem.deliveryDate);
          this.form.get('address').setValue(this.orderItem.address);
          this.form.get('phone').setValue(this.orderItem.phone);


          this.loading  = false;
        });

     }

    ngOnInit() {

    }

    ngOnDestroy(): void {
      if(this.createSb != null)
        this.createSb.unsubscribe();

      if(this.editSb != null)
        this.editSb.unsubscribe();

      if(this.getSb != null)
        this.getSb.unsubscribe();
    }
  

    edit(){
      this.loading = true;
      this.editSb = this.orderService.edit(this.form.value, this.orderId).subscribe((data)=>{

        this.loading = false;
        this.router.navigate(["/order"]);
      },
      err=> {this.loading = false;});
    } 

    create(){
      this.loading = true;
      this.createSb = this.orderService.create(this.form.value).subscribe((data)=>{

        this.loading = false;
        this.router.navigate(["/order"]);
      },
      err=> {this.loading = false;})
    }

    back(){
      this.router.navigate(["/order"]);
    }
}
