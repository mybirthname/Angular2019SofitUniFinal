import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IArticle } from '../dto/ICatalog';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/core/services/catalog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  loading:boolean;
  form:FormGroup;
  article:IArticle;
  catalogId:string;

  createSb:Subscription;
  editSb:Subscription;
  getSb:Subscription;
  
  constructor(private fb:FormBuilder, 
    private catalogService:CatalogService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) {

      this.catalogId = this.activatedRoute.snapshot.params["id"];

      this.form = this.fb.group({
        nr: ['', [Validators.required, Validators.minLength(6)]],
        title: ['', [Validators.required, Validators.minLength(6)]],
        pictureUrl:['',[Validators.required]],
        description: ['', [Validators.required]],
        pricePerPq: ['', [Validators.required]],
        category: ['', [Validators.required]]
      });

      this.setArticleValues();

     }

     setArticleValues(){
      if(!this.catalogId)
        return;

      this.loading = true;

      this.getSb = this.catalogService.getById(this.catalogId)
        .subscribe(data=> {
          console.log(data);
          this.article = data;
          this.form.get('nr').setValue(this.article.nr);
          this.form.get('title').setValue(this.article.title);
          this.form.get('pictureUrl').setValue(this.article.pictureUrl);
          this.form.get('description').setValue(this.article.description);
          this.form.get('pricePerPq').setValue(this.article.pricePerPq);
          this.form.get('category').setValue(this.article.category);


          this.loading  = false;
        });

     }

    ngOnInit() {

    }

    ngOnDestroy(): void {
      if(this.createSb != null)
        this.createSb.unsubscribe();

      if(this.editSb != null)
        this.editSb.unsubscribe();

      if(this.getSb != null)
        this.getSb.unsubscribe();
    }
  

    edit(){
      this.loading = true;
      this.editSb = this.catalogService.edit(this.form.value, this.catalogId).subscribe((data)=>{

        this.loading = false;
        this.router.navigate(["/catalog"]);
      },
      err=> {this.loading = false;});
    } 

    create(){
      this.loading = true;
      this.createSb = this.catalogService.create(this.form.value).subscribe((data)=>{

        this.loading = false;
        this.router.navigate(["/catalog"]);
      },
      err=> {this.loading = false;})
    }

    back(){
      this.router.navigate(["/catalog"]);
    }

}
