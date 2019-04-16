import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/core/services/catalog.service';
import { Subscription } from 'rxjs';
import { IArticle } from '../dto/ICatalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource:IArticle[];
  sb:Subscription;
  columnsToDisplay = ['nr', 'title', 'pricePerPq', 'category', '_id'];
  loading:boolean;

  constructor(private catalogService: CatalogService, private router:Router) { 
    this.loading = true;
    this.sb = catalogService.list().subscribe(data=>{
      this.dataSource = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  deleteRecord(id:string){
     this.loading = true;
     this.sb = this.catalogService.delete(id).subscribe(data=>{
      this.loading = false;
     },
     err=>this.loading=false);
  }

  newRecord(){
    this.router.navigate(["/catalog/edit"]);
  }

  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }

}
