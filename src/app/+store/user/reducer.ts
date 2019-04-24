import { UserActions } from './actions';
import { IUser } from 'src/app/user/dto/IUser';
import { ActionTypes } from './actions';


export interface IState{
    isLoading:boolean;
    userCollection:IUser[];
    errorMessage:string;
    currentUser:IUser;
}

const defaultState:IState={

    isLoading:false,
    userCollection:[],
    errorMessage:null,
    currentUser: null
}

export function reducer(state=defaultState, action:UserActions):IState{
    switch(action.type){
        case ActionTypes.UserDelete:{
            return { ...state, isLoading:true };
        }
        case ActionTypes.UserDeleteSuccess:{
            const payloadResult = action.payload;
            const collresult = state.userCollection.filter(x=> x._id != payloadResult.id);
            
            return {...state, isLoading:false, userCollection:collresult};
        }
        case ActionTypes.UserDeleteFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.UserList:{
            
            return { ...state, isLoading:true };
        }
        case ActionTypes.UserListFailed:{
            return {...state, isLoading: false};
        }
        case ActionTypes.UserListSuccess:{
            const coll = action.payload as IUser[];

            return {...state, isLoading:false, userCollection:coll};
        }
        case ActionTypes.UserEdit:{
            return {...state, isLoading:true};
        }
        case ActionTypes.UserEditFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.UserEditSuccess:{
            // page is redirect to UserList so no need to add values edited user to the state,
            // because we make get request to the api
            //const payload = action.payload as IUser;

            return {...state, isLoading:false };

        }
        case ActionTypes.UserAccount:{
            return { ...state, isLoading:true };
        }
        case ActionTypes.UserAccountFailed:{

            return { ...state, isLoading:false };
        }
        case ActionTypes.UserAccountSuccess:{
            const user = action.payload as IUser;

            return { ...state, currentUser: user, isLoading:false };
        }        


    }

    return state;
}