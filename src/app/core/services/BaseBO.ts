import { IBaseBO, ICRUDHttpParams } from './IBaseBO';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

export abstract class BaseBO<T> implements IBaseBO<T>{

    additionalUrl:string;
    httpParams:ICRUDHttpParams;
    queryParams:string="";

    constructor(public httpClient:HttpClient){

    }

    create(entity: T):Observable<T> {
        if(this.httpParams.create == null)
            throw new Error("Http Params related to Authentication type is mandatory");

        return this.httpClient
            .post<T>(this.additionalUrl, entity, {params:this.httpParams.create});
    }    
    
    edit(entity: T, id:string): Observable<T> {
        if(this.httpParams.edit == null)
            throw new Error("Http Params related to Authentication type is mandatory");

        return this.httpClient
            .put<T>(this.additionalUrl + `/${id}`, entity, {params:this.httpParams.edit});

    }
    
    delete(id:string): Observable<T> {
        if(this.httpParams.delete == null)
            throw new Error("Http Params related to Authentication type is mandatory");
        
        return this.httpClient
            .delete<T>(this.additionalUrl + `/${id}${this.queryParams}`,  {params:this.httpParams.delete});

    }

    getById(id:string):Observable<T>{
        if(this.httpParams.edit == null)
            throw new Error("Http Params related to Authentication type is mandatory");

        return this.httpClient
            .get<T>(this.additionalUrl + `/${id}`, {params:this.httpParams.edit});
    }
    
    list(): Observable<T[]> {

        if(this.httpParams.list == null)
            throw new Error("Http Params related to Authentication type is mandatory");
        return this.httpClient
            .get<T[]>(this.additionalUrl, {params:this.httpParams.list});
    }


}