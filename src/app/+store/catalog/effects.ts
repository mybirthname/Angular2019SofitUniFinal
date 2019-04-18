import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/core/services/catalog.service';
import { CatalogList, ActionTypes, CatalogListSuccess, CatalogListFailed, CatalogDelete, CatalogDeleteSuccess, CatalogDeleteFailed, CatalogEdit, CatalogEditSuccess, CatalogEditFailed, CatalogNew, CatalogNewSuccess, CatalogNewFailed } from './actions';


@Injectable({
    providedIn: 'root'
})
export class CatalogEffects{
    constructor(private actions$:Actions,
        private catalogService:CatalogService,
        private router:Router){

    }

    @Effect() catalogList$ = this.actions$.pipe(ofType<CatalogList>(ActionTypes.CatalogList),
        map(action=>action.payload),
        switchMap((data)=>{
            
            return this.catalogService.list().pipe(
                map(result=>{
                    return new CatalogListSuccess(result);
                }),
                catchError(((err)=> [new CatalogListFailed({error: err})]))
            )

        })
    
    );

    @Effect() catalogDelete$ = this.actions$.pipe(ofType<CatalogDelete>(ActionTypes.CatalogDelete),
        map(action=>action.payload),
        switchMap((data)=>{
            return this.catalogService.delete(data.id).pipe(
                map(result=>{

                    return new CatalogDeleteSuccess(data);
                }),
                catchError(((err)=> [new CatalogDeleteFailed({error: err})]))
            )
        })
    );

    @Effect() catalogEdit$=this.actions$.pipe(ofType<CatalogEdit>(ActionTypes.CatalogEdit),
        map(action=>action.payload),
        switchMap((data)=>{
            return this.catalogService.edit(data.entity, data.id).pipe(
                map(result=>{
                    return new CatalogEditSuccess(result);
                }),
                tap(x=>{
                    this.router.navigate(["/catalog"]);
                }),
                catchError(((err)=> [new CatalogEditFailed({error: err})]))
            )
        }));

    @Effect() catalogNew$ = this.actions$.pipe(ofType<CatalogNew>(ActionTypes.CatalogNew),
    map(action=> action.payload),
    switchMap((data)=>{
        return this.catalogService.create(data.entity).pipe(
            map(result=>{
                return new CatalogNewSuccess(result);
            }),
            tap(x=>{
                this.router.navigate(["/catalog"]);
            }),
            catchError(((err)=> [new CatalogNewFailed({error: err})]))
        )
    })


);
}