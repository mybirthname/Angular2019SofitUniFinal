import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderList, ActionTypes, OrderListSuccess, OrderListFailed, OrderDelete, OrderDeleteSuccess, OrderDeleteFailed, OrderEdit, OrderEditSuccess, OrderEditFailed, OrderNew, OrderNewSuccess, OrderNewFailed, OrderOwn, OrderOwnSuccess } from './actions';

@Injectable({
    providedIn:'root'
})
export class OrderEffects{
    constructor(private actions$:Actions,
        private orderService:OrderService,
        private router:Router){

    }

    @Effect() orderList$ = this.actions$.pipe(ofType<OrderList>(ActionTypes.OrderList),
    map(action=>action.payload),
    switchMap((data)=>{
        
        return this.orderService.list().pipe(
            map(result=>{
                return new OrderListSuccess(result);
            }),
            catchError(((err)=> [new OrderListFailed({error: err})]))
        )

        })
    );

    @Effect() orderDelete$ = this.actions$.pipe(ofType<OrderDelete>(ActionTypes.OrderDelete),
        map(action=>action.payload),
        switchMap((data)=>{
            return this.orderService.delete(data.id).pipe(
                map(result=>{

                    return new OrderDeleteSuccess(data);
                }),
                catchError(((err)=> [new OrderDeleteFailed({error: err})]))
            )
        })
    );

    @Effect() orderEdit$=this.actions$.pipe(ofType<OrderEdit>(ActionTypes.OrderEdit),
        map(action=>action.payload),
        switchMap((data)=>{
            return this.orderService.edit(data.entity, data.id).pipe(
                map(result=>{
                    return new OrderEditSuccess(result);
                }),
                tap(x=>{
                    this.router.navigate(["/order"]);
                }),
                catchError(((err)=> [new OrderEditFailed({error: err})]))
            )
        }));

    @Effect() orderNew$ = this.actions$.pipe(ofType<OrderNew>(ActionTypes.OrderNew),
        map(action=> action.payload),
        switchMap((data)=>{
            return this.orderService.create(data.entity).pipe(
                map(result=>{
                    return new OrderNewSuccess(result);
                }),
                tap(x=>{
                    this.router.navigate(["/home"]);
                }),
                catchError(((err)=> [new OrderNewFailed({error: err})]))
            )
        })
    
    
    );

    @Effect() orderOwn$ = this.actions$.pipe(ofType<OrderOwn>(ActionTypes.OrderOwn),
        map(action=> action.payload),
        switchMap((data)=>{
            console.log(data);
            return this.orderService.getByCreator(data).pipe(
                map(result=>{
                    
                    return new OrderOwnSuccess(result);
                })
            )
        })
    
    )
}