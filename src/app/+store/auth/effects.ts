import { Injectable } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { ActionTypes, Login, LoginSuccess, LoginFailed, LogOut, LogOutSuccess, SetToken } from './actions';
import { UserService } from 'src/app/core/services/user.service';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class AuthEffects{

    constructor(private actions$: Actions, private userService:UserService, private router:Router){

    }

    @Effect() init$ = this.actions$.pipe(ofType('@ngrx/effects/init'),
    switchMap(() =>{
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const userId = localStorage.getItem('userId');
        const IsAdmin = localStorage.getItem('IsAdmin');

        if(!token)
            return [];

        return [new SetToken({token, username, userId,IsAdmin})];
    }));



    @Effect() login$ = this.actions$.pipe(ofType<Login>(ActionTypes.Login),
    map(action=>action.payload),
    switchMap((data)=>{
        return this.userService.logIn(data).pipe(
            map(
                ({ username, _kmd:{authtoken:token}, _id:userId, IsAdmin } )=>{

                    return new LoginSuccess({userId, username, token, IsAdmin});
            }),
            tap(( {payload: {userId, username, token, IsAdmin}})=>{
                    //ensure on refresh of the page that the everything is stored
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('IsAdmin', IsAdmin);

                    this.router.navigate(["/home"]);
            }),
            catchError((err)=> [new LoginFailed({error: err})])
        )
    })
    )

    @Effect() logOut$ = this.actions$.pipe(ofType<LogOut>(ActionTypes.LogOut),
    map(action=>{
        localStorage.clear();

        this.router.navigate(['/home']); 
        return new LogOutSuccess(null);
     } ))
}