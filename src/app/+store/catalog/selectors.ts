import { IState as ICatalogState } from './reducer';

//WRITE INTERFACE names same way as in index.ts if only IState the store is not working properly. So you cast IState to IUserState in index.ts,
//do the same stuff here !
export const getCatalogList = (state:ICatalogState) => state.catalogCollection;
export const getIsLoading = (state:ICatalogState) => state.isLoading;