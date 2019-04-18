import { IAction } from 'src/app/shared/interfaces';

export const ActionTypes = {
    CatalogEdit :'[CATALOG] Edit',
    CatalogEditSuccess:'[CATALOG] Edit Success',
    CatalogEditFailed: '[CATALOG] Edit Failed',

    CatalogDelete: '[CATALOG] Delete',
    CatalogDeleteSuccess:'[CATALOG] Delete Success',
    CatalogDeleteFailed: '[CATALOG] Delete Failed',

    CatalogList: '[CATALOG] List',
    CatalogListSuccess: '[CATALOG] List Success',
    CatalogListFailed: '[CATALOG] List Failed',

    CatalogNew: '[CATALOG] New',
    CatalogNewSuccess: '[CATALOG] New Success',
    CatalogNewFailed: '[CATALOG] New Failed'
}

export class CatalogList implements IAction<null>{
    type=ActionTypes.CatalogList;

    constructor(public payload:null){

    }
}

export class CatalogListSuccess implements IAction<any>{
    type=ActionTypes.CatalogListSuccess;

    constructor(public payload:any){
        
    }
}

export class CatalogListFailed implements IAction<any>{
    type=ActionTypes.CatalogListFailed;

    constructor(public payload:any){
        
    }
}

export class CatalogEdit implements IAction<{id:string, entity:any}>{
    type=ActionTypes.CatalogEdit;

    constructor(public payload:{id:string, entity:any}){

    }
}

export class CatalogEditSuccess implements IAction<any>{
    type=ActionTypes.CatalogEditSuccess;

    constructor(public payload:any){

    }
}

export class CatalogEditFailed implements IAction<any>{
    type=ActionTypes.CatalogEditFailed;

    constructor(public payload:any){

    }
}

export class CatalogDelete implements IAction<{id:string}>{
    type=ActionTypes.CatalogDelete;

    constructor(public payload:{id:string}){

    }
}

export class CatalogDeleteSuccess implements IAction<any>{
    type=ActionTypes.CatalogDeleteSuccess;

    constructor(public payload:any){

    }
}

export class CatalogDeleteFailed implements IAction<any>{
    type=ActionTypes.CatalogDeleteFailed;

    constructor(public payload:any){

    }
}

export class CatalogNewFailed implements IAction<any>{
    type=ActionTypes.CatalogNewFailed;

    constructor(public payload:any){

    }
}
export class CatalogNewSuccess implements IAction<any>{
    type=ActionTypes.CatalogNewSuccess;

    constructor(public payload:any){

    }
}
export class CatalogNew implements IAction<{entity:any}>{
    type=ActionTypes.CatalogNew;

    constructor(public payload:any){

    }
}

export type CatalogActions = CatalogList|
CatalogListSuccess|
CatalogListFailed|
CatalogDelete|
CatalogDeleteFailed|
CatalogDeleteSuccess|
CatalogEdit|
CatalogEditFailed|
CatalogEditSuccess|
CatalogNew|
CatalogNewFailed|
CatalogNewSuccess;