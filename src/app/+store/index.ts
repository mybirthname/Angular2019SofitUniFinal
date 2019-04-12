import { IOrder } from '../order/dto/IOrder';
import { IState } from './IState';
import { IAction } from './IAction';

export interface IAppState{
    order: (state, action) => IOrder
}


export function reducer(state:IState, action:IAction)
{
    if(action.type === ''){
        //state.order.
    }

    return state;
}