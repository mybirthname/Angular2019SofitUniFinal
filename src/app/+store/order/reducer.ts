import { OrderActions } from './actions';
import { IOrder } from 'src/app/order/dto/IOrder';
import { ActionTypes } from './actions';

export interface IState{
    isLoading:boolean;
    orderCollection:IOrder[];
    orderOwnCollection:IOrder[]
    errorMessage:string;
}

const defaultState: IState ={
    isLoading:false,
    orderCollection:[],
    errorMessage: null,
    orderOwnCollection:[]
}

export function reducer(state=defaultState, action:OrderActions){
    switch(action.type){
        case ActionTypes.OrderDelete:{
            return {...state, isLoading:true}
        }
        case ActionTypes.OrderDeleteSuccess:{
            const payloadResult = action.payload;
            const collresult = state.orderCollection.filter(x=> x._id != payloadResult.id);
            
            return {...state, isLoading:false, orderCollection:collresult};
        }
        case ActionTypes.OrderDeleteFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.OrderList:{
            
            return { ...state, isLoading:true };
        }
        case ActionTypes.OrderListFailed:{
            return {...state, isLoading: false};
        }
        case ActionTypes.OrderListSuccess:{
            const coll = action.payload as IOrder[];

            return {...state, isLoading:false, orderCollection:coll};
        }
        case ActionTypes.OrderEdit:{
            return {...state, isLoading:true};
        }
        case ActionTypes.OrderEditFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.OrderEditSuccess:{
            // page is redirect to OrderList so no need to add values edited user to the state,
            // because we make get request to the api
            //const payload = action.payload as IUser;

            return {...state, isLoading:false };
        }
        case ActionTypes.OrderNew:{
            return {...state, isLoading:true};
        }
        case ActionTypes.OrderNewFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.OrderNewSuccess:{
            // page is redirect to OrderList so no need to add values edited user to the state,
            // because we make get request to the api
            //const payload = action.payload as IUser;

            return {...state, isLoading:false };
        }
        case ActionTypes.OrderOwn:{
            
            return { ...state, isLoading: true };
        }
        case ActionTypes.OrderOwnFailed:{
            return {...state, isLoading: false};
        }
        case ActionTypes.OrderOwnSuccess:{
            const coll = action.payload as IOrder[];

            return {...state, isLoading: false, orderOwnCollection:coll};
        }

    }

    return state;
}