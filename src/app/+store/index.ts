
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {reducer as authReducer, IState as IAuthState} from './auth/reducer';
import {reducer as userReducer, IState as IUserState} from './user/reducer';
import {reducer as orderReducer, IState as IOrderState} from './order/reducer';
import {reducer as catalogReducer, IState as ICatalogState} from './catalog/reducer';
import * as auth from './auth/selectors';
import * as user from './user/selectors';
import * as order from './order/selector';
import * as catalog from './catalog/selectors';

export const reducers = {
    auth:authReducer,
    user:userReducer,
    order:orderReducer,
    catalog: catalogReducer
};

export interface IAppState{
    auth: IAuthState,
    user: IUserState,
    order: IOrderState,
    catalog: ICatalogState
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
export const getCurrentUserColllection = createSelector(getUserStore, user.getCurrentUser);

//#endregion

//#region OrderSelectors

export const getOrderStore = createFeatureSelector('order');

export const getOrderListCollection = createSelector(getOrderStore, order.getOrderList);
export const getOrderLoading = createSelector(getOrderStore, order.getIsLoading);
export const getOrderOwnCollection = createSelector(getOrderStore, order.getOrderOwn);

//#endregion

//#region CatalogSelectors

export const getCatalogStore = createFeatureSelector('catalog');

export const getCatalogListCollection = createSelector(getCatalogStore, catalog.getCatalogList);
export const getCatalogLoading = createSelector(getCatalogStore, catalog.getIsLoading);

//#endregion