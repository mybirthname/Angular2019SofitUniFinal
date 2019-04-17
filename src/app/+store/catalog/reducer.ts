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
        
    }

    return state;
}