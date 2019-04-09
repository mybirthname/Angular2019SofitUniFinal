import { MatTabsModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatTabsModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule
    ],
    exports: [MatTabsModule, MatCheckboxModule, MatToolbarModule, MatIconModule]
  })
  export class AngularMaterialModule { }