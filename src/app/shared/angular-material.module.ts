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
          MatSlideToggleModule} from '@angular/material';
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
      MatSlideToggleModule  
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
      MatSlideToggleModule  
    ]
  })
  export class AngularMaterialModule { }