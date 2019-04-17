import { IState as IUserState } from './reducer';

//WRITE INTERFACE names same way as in index.ts if only IState the store is not working properly. So you cast IState to IUserState in index.ts,
//do the same stuff here !
export const getUserList = (state:IUserState) => state.userCollection;
export const getIsLoading = (state:IUserState) => state.isLoading;
