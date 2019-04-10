import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { EntityComponent } from './components/entity/entity.component';
import { EditComponent } from './components/edit/edit.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [ListComponent, EntityComponent, EditComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: []
})
export class UserModule { }
