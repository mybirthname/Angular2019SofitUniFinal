import { IState as IOrderState } from './reducer';

//WRITE INTERFACE names same way as in index.ts if only IState the store is not working properly. So you cast IState to IUserState in index.ts,
//do the same stuff here !
export const getOrderList = (state:IOrderState) => state.orderCollection;
export const getIsLoading = (state:IOrderState) => state.isLoading;