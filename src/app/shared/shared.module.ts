import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaxSymbolsPipe } from './max-symbols.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [MaxSymbolsPipe, HighlightDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule
    
  ],
  exports: [FormsModule, ReactiveFormsModule,AngularMaterialModule, FlexLayoutModule, MaxSymbolsPipe, HighlightDirective]
})
export class SharedModule { 

}
