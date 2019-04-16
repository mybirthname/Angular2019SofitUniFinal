import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/core/services/order.service';
import { IOrder } from '../../dto/IOrder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource:IOrder[];
  sb:Subscription;
  columnsToDisplay = ['nrIntern', 'title', 'user', 'deliveryDate', '_id'];
  loading:boolean;

  constructor(private orderService: OrderService, private router:Router) { 
    this.loading = true;
    this.sb = orderService.list().subscribe(data=>{
      this.dataSource = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  deleteRecord(id:string){
     this.loading = true;
     this.sb = this.orderService.delete(id).subscribe(data=>{
      this.loading = false;
     },
     err=>this.loading=false);
  }

  newRecord(){
    this.router.navigate(["/order/edit"]);
  }

  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }
}
