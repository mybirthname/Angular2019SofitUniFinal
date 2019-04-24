import { IAction } from 'src/app/shared/interfaces';

export const ActionTypes = {
    OrderEdit :'[ORDER] Edit',
    OrderEditSuccess:'[ORDER] Edit Success',
    OrderEditFailed: '[ORDER] Edit Failed',

    OrderDelete: '[ORDER] Delete',
    OrderDeleteSuccess:'[ORDER] Delete Success',
    OrderDeleteFailed: '[ORDER] Delete Failed',

    OrderList: '[ORDER] List',
    OrderListSuccess: '[ORDER] List Success',
    OrderListFailed: '[ORDER] List Failed',

    OrderNew: '[ORDER] New',
    OrderNewSuccess: '[ORDER] New Success',
    OrderNewFailed: '[ORDER] New Failed',

    OrderOwn: '[ORDER] Own',
    OrderOwnSuccess: '[ORDER] Own Success',
    OrderOwnFailed: '[ORDER] Own Failed',

}

export class OrderList implements IAction<null>{
    type=ActionTypes.OrderList;

    constructor(public payload:null){

    }
}

export class OrderEditSuccess implements IAction<any>{
    type=ActionTypes.OrderEditSuccess;

    constructor(public payload:any){
        
    }
}

export class OrderEditFailed implements IAction<any>{
    type=ActionTypes.OrderEditFailed;

    constructor(public payload:any){
        
    }
}

export class OrderEdit implements IAction<{id:string, entity:any}>{
    type=ActionTypes.OrderEdit;

    constructor(public payload:{id:string, entity:any}){

    }
}

export class OrderDeleteSuccess implements IAction<any>{
    type=ActionTypes.OrderDeleteSuccess;

    constructor(public payload:any){

    }
}

export class OrderDeleteFailed implements IAction<any>{
    type=ActionTypes.OrderDeleteFailed;

    constructor(public payload:any){

    }
}

export class OrderDelete implements IAction<{id:string}>{
    type=ActionTypes.OrderDelete;

    constructor(public payload:{id:string}){

    }
}

export class OrderOwn implements IAction<{entity:any}>{
    type=ActionTypes.OrderOwn;

    constructor(public payload:any){

    }
}

export class OrderOwnSuccess implements IAction<any>{
    type=ActionTypes.OrderOwnSuccess;

    constructor(public payload:any){

    }

}
export class OrderOwnFailed implements IAction<any>{
    type=ActionTypes.OrderOwnFailed;

    constructor(public payload:any){

    }
}

export class OrderListSuccess implements IAction<any>{
    type=ActionTypes.OrderListSuccess;

    constructor(public payload:any){

    }
}

export class OrderListFailed implements IAction<any>{
    type=ActionTypes.OrderListFailed;

    constructor(public payload:any){

    }
}

export class OrderNew implements IAction<{entity:any}>{
    type=ActionTypes.OrderNew;

    constructor(public payload:any){

    }
}
export class OrderNewFailed implements IAction<any>{
    type=ActionTypes.OrderNewFailed;

    constructor(public payload:any){

    }
}
export class OrderNewSuccess implements IAction<any>{
    type=ActionTypes.OrderNewSuccess;

    constructor(public payload:any){

    }
}

export type OrderActions = OrderList|
OrderListSuccess|
OrderListFailed|
OrderDelete|
OrderDeleteFailed|
OrderDeleteSuccess|
OrderEdit|
OrderEditFailed|
OrderEditSuccess|
OrderNew|
OrderNewFailed|
OrderNewSuccess|
OrderOwn|
OrderOwnFailed|
OrderOwnSuccess;
