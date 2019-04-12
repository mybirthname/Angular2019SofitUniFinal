import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const appKey= environment.appKey;
const appSecret = environment.appSecret;
const token = localStorage.getItem('token');

export class AuthenticationHeaderFactory{
    h:HttpHeaders;
    
    Create(type:string): HttpHeaders{
        
        if(type === "Basic"){
             return new HttpHeaders({'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`});
        }
        else if(type === "Kinvey"){
            return new HttpHeaders({'Authorization': `Kinvey ${token}`});
        }
        else{
            throw new Error(`Current Authentication type is not defined ${type}`)
        }

         
    }
}