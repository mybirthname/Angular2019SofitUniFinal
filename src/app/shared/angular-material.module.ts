import { MatTabsModule, 
          MatCheckboxModule, 
          MatToolbarModule, 
          MatIconModule, 
          MatSidenavModule, 
          MatListModule, 
          MatButtonModule,
          MatMenuModule,
          MatCardModule,
          MatFormFieldModule,
          MatInputModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatRadioModule,
          MatSelectModule,
          MatOptionModule,
          MatSlideToggleModule,
          MatProgressSpinnerModule,
          MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatTabsModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,      
      MatMenuModule,      
      MatCardModule,      
      MatFormFieldModule,      
      MatInputModule,      
      MatDatepickerModule,      
      MatNativeDateModule,      
      MatRadioModule,      
      MatSelectModule,      
      MatOptionModule,      
      MatSlideToggleModule,
      MatProgressSpinnerModule,
      MatTableModule
    ],
    exports: [
      MatTabsModule, 
      MatCheckboxModule, 
      MatToolbarModule, 
      MatIconModule, 
      MatSidenavModule,
      MatListModule,
      MatButtonModule,      
      MatMenuModule,      
      MatCardModule,      
      MatFormFieldModule,      
      MatInputModule,      
      MatDatepickerModule,      
      MatNativeDateModule,      
      MatRadioModule,      
      MatSelectModule,      
      MatOptionModule,      
      MatSlideToggleModule,
      MatProgressSpinnerModule,
      MatTableModule
    ]
  })
  export class AngularMaterialModule { }