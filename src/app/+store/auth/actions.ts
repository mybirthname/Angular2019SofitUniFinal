
import { IAction } from 'src/app/shared/interfaces';

export const ActionTypes = {
    Register :'[AUTH] Register',
    RegisterSuccess:'[AUTH] Register Success',
    RegisterFailed: '[AUTH] Register Failed',

    Login: '[AUTH] Login',
    LoginSuccess:'[AUTH] Login Success',
    LoginFailed: '[AUTH] Login Failed',

    LogOut:'[AUTH] Logout',
    LogOutFailed:'[AUTH] Logout Failed',
    LogOutSuccess: '[AUTH] Logout Success',

    SetLocalStorageFields: '[AUTH] Set Local Storage Fields'


}

export class LogOut implements IAction<null>{
    type=ActionTypes.LogOut;

    constructor(public payload:null){

    }
}
export class LogOutSuccess implements IAction<null>{
    type=ActionTypes.LogOutSuccess;

    constructor(public payload:null){

    }
}
export class LogOutFailed implements IAction<null>{
    type=ActionTypes.LogOutFailed;

    constructor(public payload:null){

    }
}

export class Register implements IAction<any>{
    type= ActionTypes.Register;

    constructor(public payload: any){

    }
}

export class RegisterSuccess implements IAction<{firstName:string, lastName:string}>{
    type= ActionTypes.RegisterSuccess;

    constructor(public payload :{firstName:string, lastName:string}){

    }
}

export class RegisterFailed implements IAction< {error:any}>{
    type= ActionTypes.RegisterFailed;

    constructor(public payload: {error:any}){

    }
}

export class Login implements IAction<{username:string, password:string}>{
    type= ActionTypes.Login;

    constructor(public payload: {username:string, password:string}){

    }
}

export class LoginSuccess implements IAction<{userId: string, username:string}>{
    type= ActionTypes.LoginSuccess;

    constructor(public payload : {userId: string, username:string, token:string, IsAdmin:string}){

    }
}

export class LoginFailed implements IAction<{error:any}>{
    type= ActionTypes.LoginFailed;

    constructor(public payload: {error:any}){

    }
}

export class SetToken implements IAction<{token:string, username:string, userId:string, IsAdmin:string}>{
    type = ActionTypes.SetLocalStorageFields;
    constructor (public payload:{token:string, username:string, userId:string, IsAdmin:string} ){
        
    }
}

export type Actions = Register|
    RegisterSuccess |
    RegisterFailed |
    Login |
    LoginSuccess |
    LoginFailed | 
    LogOutSuccess |
    LogOutFailed |
    LogOut
    SetToken;



