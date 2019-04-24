import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {EditComponent} from './components/edit/edit.component';
import { SuperAdminGuard } from '../core/services/super-admin.guard';
import { AuthGuard } from '../core/services/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { CurrentUserGuard } from '../core/services/current-user.guard';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    canActivate: [SuperAdminGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'account/:id',
    component: AccountComponent,
    canActivate:[CurrentUserGuard]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }