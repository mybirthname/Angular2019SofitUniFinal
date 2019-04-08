import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [ShopCartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[ShopCartComponent]
})
export class CartModule { }
