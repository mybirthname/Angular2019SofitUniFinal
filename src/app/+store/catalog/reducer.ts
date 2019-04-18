import { CatalogActions } from './actions';
import { IArticle } from 'src/app/catalog/dto/ICatalog';
import { ActionTypes } from './actions';

export interface IState{
    isLoading:boolean;
    catalogCollection: IArticle[];
    errorMessage:string;
}

const defaultState: IState={
    isLoading:false,
    catalogCollection:[],
    errorMessage:null
}

export function reducer(state=defaultState, action:CatalogActions){
    switch(action.type){
        case ActionTypes.CatalogDelete:{
            return {...state, isLoading:true}
        }
        case ActionTypes.CatalogDeleteSuccess:{
            const payloadResult = action.payload;
            const collresult = state.catalogCollection.filter(x=> x._id != payloadResult.id);
            
            return {...state, isLoading:false, catalogCollection:collresult};
        }
        case ActionTypes.CatalogDeleteFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.CatalogList:{
            
            return { ...state, isLoading:true };
        }
        case ActionTypes.CatalogListFailed:{
            return {...state, isLoading: false};
        }
        case ActionTypes.CatalogListSuccess:{
            const coll = action.payload as IArticle[];

            return {...state, isLoading:false, catalogCollection:coll};
        }
        case ActionTypes.CatalogEdit:{
            return {...state, isLoading:true};
        }
        case ActionTypes.CatalogEditFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.CatalogEditSuccess:{
            // page is redirect to OrderList so no need to add values edited user to the state,
            // because we make get request to the api
            //const payload = action.payload as IUser;

            return {...state, isLoading:false };
        }
        case ActionTypes.CatalogNew:{
            return {...state, isLoading:true};
        }
        case ActionTypes.CatalogNewFailed:{
            return {...state, isLoading:false};
        }
        case ActionTypes.CatalogNewSuccess:{
            // page is redirect to CatalogList so no need to add values edited user to the state,
            // because we make get request to the api
            //const payload = action.payload as IUser;

            return {...state, isLoading:false };
        }
    }

    return state;
}