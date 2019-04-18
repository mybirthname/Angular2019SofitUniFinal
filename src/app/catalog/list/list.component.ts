import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../dto/ICatalog';
import { Router } from '@angular/router';
import { IAppState, getCatalogLoading, getCatalogListCollection } from 'src/app/+store';
import { Store } from '@ngrx/store';
import { CatalogList, CatalogDelete } from 'src/app/+store/catalog/actions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource$:Observable<IArticle[]>;
  columnsToDisplay = ['nrIntern', 'title', 'pricePerPq', 'category', '_id'];
  loading$:Observable<boolean>;

  constructor(private store:Store<IAppState>, private router:Router) { 
    store.dispatch(new CatalogList(null));
  }

  ngOnInit() {
    this.loading$ = this.store.select(getCatalogLoading);
    this.dataSource$ = this.store.select(getCatalogListCollection);
  }

  deleteRecord(id:string){
    this.store.dispatch(new CatalogDelete({id}));
  }

  newRecord(){
    this.router.navigate(["/catalog/edit"]);
  }

}
