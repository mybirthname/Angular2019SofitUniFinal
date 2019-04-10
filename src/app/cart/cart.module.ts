import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EntityComponent } from './components/entity/entity.component';


@NgModule({
  declarations: [ShopCartComponent, EntityComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class CartModule { 

}
