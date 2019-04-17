
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {reducer as authReducer, IState as IAuthState} from './auth/reducer'
import {reducer as userReducer, IState as IUserState} from './user/reducer';
import * as auth from './auth/selectors';
import * as user from './user/selectors';

export const reducers = {
    auth:authReducer,
    user:userReducer
};

export interface IAppState{
    auth: IAuthState,
    user: IUserState
}

//#region AuthSelectors
export const getAuthStore= createFeatureSelector('auth');

export const getAuthUserName= createSelector(getAuthStore, auth.getUserName);
export const getAuthUserId= createSelector(getAuthStore, auth.getUserId);
export const getAuthToken= createSelector(getAuthStore, auth.getToken);
export const getAuthErrorMessage= createSelector(getAuthStore, auth.getErrorMsg);
export const getSuperAdmin = createSelector(getAuthStore, auth.getIsSuperAdmin);
export const getIsLoadingValue = createSelector(getAuthStore, auth.getIsLoading);

export const getIsSuperAdmin = createSelector(getSuperAdmin, token=>!!token);
export const getIsAuthenticated = createSelector(getAuthToken, token=>!!token);

//#endregion

//#region UserSelectors

export const getUserStore = createFeatureSelector('user');

export const getUserListColl = createSelector(getUserStore, user.getUserList);
export const getUserLoading = createSelector(getUserStore, user.getIsLoading);

//export const getUserListCollValue = createSelector(getUserListColl, x=>{ console.log(x) })


//#endregion

