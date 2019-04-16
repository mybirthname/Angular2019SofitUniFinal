import { Action } from '@ngrx/store';
import { ActionTypes, LoginFailed } from './actions';
import { IAction } from 'src/app/shared/interfaces';
import { IsSuperAdmin } from 'src/app/shared/magic-strings';

export interface IState{
    userId:string;
    username:string,
    token:string,
    errorMessage: string,
    IsAdmin:string
}

const defaultState:IState = {
    userId:null,
    username:null,
    token:null,
    IsAdmin:null,
    errorMessage: null
};


export function reducer(state = defaultState, action:any):IState{
    switch(action.type){
        case ActionTypes.LoginSuccess:{
         const {token, username, userId, IsAdmin} = action.payload; 

         return {...state, token, username, userId, IsAdmin}; 
        }
        case ActionTypes.LoginFailed: {
            const {error} = (action as LoginFailed).payload;

            return {...state, errorMessage: error.error.description};
        }
        case ActionTypes.Login:{
           return state;
        }
        case ActionTypes.LogOutSuccess:{
            return defaultState;
        }
        case ActionTypes.SetLocalStorageFields:{
            const {token, username, userId, IsAdmin} = action.payload; 

            return {... state, token, username, userId, IsAdmin};
        }
    }

    return state;
}