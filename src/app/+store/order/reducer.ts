import { OrderActions } from './actions';
import { IOrder } from 'src/app/order/dto/IOrder';
import { ActionTypes } from './actions';

export interface IState{
    isLoading:boolean;
    orderCollection:IOrder[];
    errorMessage:string;
}

const defaultState: IState ={
    isLoading:false,
    orderCollection:[],
    errorMessage: null
}

