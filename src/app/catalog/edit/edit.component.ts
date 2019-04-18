import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IArticle } from '../dto/ICatalog';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/core/services/catalog.service';
import { Store } from '@ngrx/store';
import { IAppState, getCatalogListCollection, getCatalogLoading } from 'src/app/+store';
import { CatalogEdit, CatalogNew } from 'src/app/+store/catalog/actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  loading$:Observable<boolean>;
  form:FormGroup;
  article:IArticle;
  catalogId:string;
  sb:Subscription;
  
  constructor(private fb:FormBuilder, 
    private store:Store<IAppState>,
    private activatedRoute:ActivatedRoute,
    private router:Router) {

      this.catalogId = this.activatedRoute.snapshot.params["id"];

      this.form = this.fb.group({
        nrIntern: ['', [Validators.required, Validators.minLength(6)]],
        title: ['', [Validators.required, Validators.minLength(6)]],
        pictureUrl:['',[Validators.required]],
        description: ['', [Validators.required]],
        pricePerPq: ['', [Validators.required]],
        category: ['', [Validators.required]]
      });

      this.loading$ = this.store.select(getCatalogLoading);

     }

     setArticleValues(){
      if(!this.catalogId)
        return;

      this.sb = this.store.select(getCatalogListCollection).subscribe(articleList=> {
          this.article = articleList.filter(c=> c._id == this.catalogId)[0];;
          this.form.get('nrIntern').setValue(this.article.nrIntern);
          this.form.get('title').setValue(this.article.title);
          this.form.get('pictureUrl').setValue(this.article.pictureUrl);
          this.form.get('description').setValue(this.article.description);
          this.form.get('pricePerPq').setValue(this.article.pricePerPq);
          this.form.get('category').setValue(this.article.category);
        });


     }

    ngOnInit() {
      this.setArticleValues();

    }

    ngOnDestroy(): void {
      if(this.sb != null)
        this.sb.unsubscribe();
    }
  

    edit(){
      this.store.dispatch(new CatalogEdit({id:this.catalogId, entity:this.form.value}));
    } 

    create(){
      this.store.dispatch(new CatalogNew({entity:this.form.value}));
    }

    back(){
      this.router.navigate(["/catalog"]);
    }

}
