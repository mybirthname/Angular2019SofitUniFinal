
import { ActionTypes, LoginFailed, Actions, RegisterFailed } from './actions';


export interface IState{
    userId:string;
    username:string;
    token:string;
    errorMessage: string;
    IsAdmin:string;
    isLoading: boolean;
}

const defaultState:IState = {
    userId:null,
    username:null,
    token:null,
    IsAdmin:null,
    errorMessage: null,
    isLoading:false
};


export function reducer(state = defaultState, action:Actions):IState{
    switch(action.type){
        case ActionTypes.LoginSuccess:{
         const {token, username, userId, IsAdmin} = action.payload; 

         return {...state, token, username, userId, IsAdmin, isLoading:false}; 
        }
        case ActionTypes.LoginFailed: {
            const {error} = (action as LoginFailed).payload;

            return {...state, errorMessage: error.error.description, isLoading:false};
        }
        case ActionTypes.Login:{
           return { ...state, isLoading:true };
        }
        case ActionTypes.LogOutSuccess:{
            return defaultState;
        }
        case ActionTypes.SetLocalStorageFields:{
            const {token, username, userId, IsAdmin} = action.payload; 

            return {... state, token, username, userId, IsAdmin};
        }
        case ActionTypes.Register:{
            return {...state, isLoading:true};
        }
        case ActionTypes.RegisterSuccess:{

            return {...state, isLoading:false};
        }
        case ActionTypes.RegisterFailed:{
            const {error} = (action as RegisterFailed).payload;

            return {...state, errorMessage: error.error.description, isLoading:false};
        }
    }

    return state;
}