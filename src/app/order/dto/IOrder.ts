export interface IOrder{
    _id:string;
    nrIntern:string;
    title:string;
    pictureUrl:string;
    description:string;
    deliveryDate:Date;
    pricePerPq:number;
    category:string;
    userId:string;
    status:string;
}