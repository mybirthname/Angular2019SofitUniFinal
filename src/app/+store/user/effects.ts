import { Injectable } from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { UserEdit, ActionTypes, UserEditSuccess, UserList, UserListSuccess, UserDelete, UserDeleteSuccess, UserDeleteFailed, UserListFailed, UserEditFailed, UserAccount, UserAccountSuccess } from './actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class UserEffects{
    constructor(private actions$:Actions,
        private userService:UserService,
        private router:Router){

    }

     @Effect() userList$ = this.actions$.pipe(ofType<UserList>(ActionTypes.UserList),
        map(action=>action.payload),
        switchMap((data)=>{
            
            return this.userService.list().pipe(
                map(result=>{
                    return new UserListSuccess(result);
                }),
                catchError(((err)=> [new UserListFailed({error: err})]))
            )

        })
     
     );

     @Effect() userDelete$ = this.actions$.pipe(ofType<UserDelete>(ActionTypes.UserDelete),
        map(action=>action.payload),
        switchMap((data)=>{
            return this.userService.delete(data.id).pipe(
                map(result=>{

                    return new UserDeleteSuccess(data);
                }),
                catchError(((err)=> [new UserDeleteFailed({error: err})]))
            )
        })
     );

     @Effect() userEdit$=this.actions$.pipe(ofType<UserEdit>(ActionTypes.UserEdit),
        map(action=>action.payload),
        switchMap((data)=>{
            return this.userService.edit(data.entity, data.id).pipe(
                map(result=>{
                    return new UserEditSuccess(result);
                }),
                tap(x=>{
                    this.router.navigate(["/user"]);
                }),
                catchError(((err)=> [new UserEditFailed({error: err})]))
            )
        })
        
    
    );

    @Effect() userAccount$ = this.actions$.pipe(ofType<UserAccount>(ActionTypes.UserAccount),
        map(action=>action.payload),
        switchMap((data)=>{
            return this.userService.getById(data.id).pipe(
                map(result=>{
                    return new UserAccountSuccess(result);
                })
            )
        })
    )

    
}
