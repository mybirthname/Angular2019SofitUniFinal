import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { EntityComponent } from './components/entity/entity.component';
import { EditComponent } from './components/edit/edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [ListComponent, EntityComponent, EditComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports:[]
})
export class OrderModule { }
