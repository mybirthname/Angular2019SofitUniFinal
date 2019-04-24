import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as MagicStrings from 'src/app/shared/magic-strings';

const appKey= environment.appKey;
const appSecret = environment.appSecret;
const masterSecret = environment.masterSecret;

export class AuthenticationHeaderFactory{
    h:HttpHeaders;
    
    Create(type:string, token:string):HttpHeaders{
 
        if(type == "Basic"){
            let headerObj = {
                'Authorization': `Basic ${
                    btoa(appKey + ":" + appSecret)}`
            };
            
            return new HttpHeaders(headerObj);
        }
        else if(type == "Kinvey"){

            let headerObj = {
                'Authorization': `Kinvey ${token}`
            }  

            return new HttpHeaders(headerObj);
        }
        else if(type == "BasicMaster"){
            let headerObj = {
                'Authorization': `Basic ${
                    btoa(appKey + ":" + masterSecret)}`
            };
            
            return new HttpHeaders(headerObj);        }
        else{
            throw new Error(`Current Authentication type is not defined ${type}`)
        }

         
    }
}