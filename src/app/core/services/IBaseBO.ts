import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

export interface IBaseBO<T>{
    create(entity:T):Observable<T>
    edit(entity:T, id:string):Observable<T>
    delete(id:string):Observable<T>
    list():Observable<T[]>
}

export interface ICRUDHttpParams{
    list:HttpParams;
    create:HttpParams;
    edit:HttpParams;
    delete:HttpParams;
}

