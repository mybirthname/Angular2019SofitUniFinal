import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomPreloader } from './core/services/custom-preloader';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path:'cart',
    loadChildren: './cart/cart.module#CartModule',
    data: { preload: true }
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
    preloadingStrategy: CustomPreloader
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
