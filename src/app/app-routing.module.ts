import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path:'cart',
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path:'order',
    loadChildren:'./order/order.module#OrderModule'
  },
  {
    path:'user',
    loadChildren: './user/user.module#UserModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
