import {IState} from './reducer'

export const getToken = (state:IState) => state.token;
export const getUserId = (state:IState) => state.userId;
export const getUserName = (state:IState) => state.username;
export const getErrorMsg = (state:IState) => state.errorMessage;
export const getIsSuperAdmin = (state:IState) => state.IsAdmin;