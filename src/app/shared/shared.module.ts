import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
    
  ],
  exports: [ReactiveFormsModule,AngularMaterialModule, HttpClientModule]
})
export class SharedModule { 

}
