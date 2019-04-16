
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {reducer as authReducer, IState as IAuthState} from './auth/reducer'
import * as auth from './auth/selectors';

export const reducers = {
    auth:authReducer
};

export interface IAppState{
    auth: IAuthState
}

export const getAuthStore= createFeatureSelector('auth');

export const getAuthUserName= createSelector(getAuthStore, auth.getUserName);
export const getAuthUserId= createSelector(getAuthStore, auth.getUserId);
export const getAuthToken= createSelector(getAuthStore, auth.getToken);
export const getAuthErrorMessage= createSelector(getAuthStore, auth.getErrorMsg);
export const getSuperAdmin = createSelector(getAuthStore, auth.getIsSuperAdmin);

export const getIsSuperAdmin = createSelector(getSuperAdmin, token=>!!token);
export const getIsAuthenticated = createSelector(getAuthToken, token=>!!token);
