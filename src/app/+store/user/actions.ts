import { IAction } from 'src/app/shared/interfaces';

export const ActionTypes = {
    UserEdit :'[USER] Edit',
    UserEditSuccess:'[USER] Edit Success',
    UserEditFailed: '[USER] Edit Failed',

    UserDelete: '[USER] Delete',
    UserDeleteSuccess:'[USER] Delete Success',
    UserDeleteFailed: '[USER] Delete Failed',

    UserList: '[USER] List',
    UserListSuccess: '[USER] List Success',
    UserListFailed: '[USER] List Failed',

    UserAccount: '[USER] Account',
    UserAccountSuccess: '[USER] Account Success',
    UserAccountFailed: '[USER] Account Failed'

}

export class UserList implements IAction<null>{
    type=ActionTypes.UserList;

    constructor(public payload:null){

    }
}

export class UserListSuccess implements IAction<any>{
    type=ActionTypes.UserListSuccess;

    constructor(public payload:any){
        
    }
}

export class UserListFailed implements IAction<any>{
    type=ActionTypes.UserListFailed;

    constructor(public payload:any){
        
    }
}

export class UserAccount implements IAction<{id:string}>{
    type=ActionTypes.UserAccount;

    constructor(public payload: {id:string}){

    }
}

export class UserAccountFailed implements IAction<any>{
    type = ActionTypes.UserAccountFailed;
    constructor(public payload: any){

    }
}

export class UserAccountSuccess implements IAction<any>{
    type=ActionTypes.UserAccountSuccess;

    constructor(public payload: any){

    }
}

export class UserEdit implements IAction<{id:string, entity:any}>{
    type=ActionTypes.UserEdit;

    constructor(public payload:{id:string, entity:any}){

    }
}

export class UserEditSuccess implements IAction<any>{
    type=ActionTypes.UserEditSuccess;

    constructor(public payload:any){

    }
}

export class UserEditFailed implements IAction<any>{
    type=ActionTypes.UserEditFailed;

    constructor(public payload:any){

    }
}

export class UserDelete implements IAction<{id:string}>{
    type=ActionTypes.UserDelete;

    constructor(public payload:{id:string}){

    }
}

export class UserDeleteSuccess implements IAction<any>{
    type=ActionTypes.UserDeleteSuccess;

    constructor(public payload:any){

    }
}

export class UserDeleteFailed implements IAction<any>{
    type=ActionTypes.UserDeleteFailed;

    constructor(public payload:any){

    }
}

export type UserActions = UserDeleteFailed|
    UserDeleteSuccess |
    UserDelete |
    UserEditFailed |
    UserEditSuccess |
    UserEdit|
    UserList|
    UserListFailed|
    UserListSuccess|
    UserAccount|
    UserAccountFailed|
    UserAccountSuccess;