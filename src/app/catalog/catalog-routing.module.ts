import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { SuperAdminGuard } from '../core/services/super-admin.guard';
import { CatalogEditResolver } from '../core/resolvers/catalog-edit.resolver';

const routes: Routes = [{
    path:'',
    component: ListComponent    
},
{
    path:'edit',
    component:EditComponent,
    canActivate:[SuperAdminGuard]
},
{
    path:'edit/:id',
    component:EditComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CatalogRoutingModule { }