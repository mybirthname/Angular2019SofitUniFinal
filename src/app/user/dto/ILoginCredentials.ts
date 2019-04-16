export interface ILoginCredentials{
    username:string;
    password:string;
}

export interface ILoginResponse{
    username:string;
    _kmd:{authtoken:string};
    _id:string;
    IsAdmin:string;
}