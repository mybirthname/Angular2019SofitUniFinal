import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as MagicStrings from 'src/app/shared/magic-strings';

const appKey= environment.appKey;
const appSecret = environment.appSecret;
const token = localStorage.getItem(MagicStrings.Token);

export class AuthenticationHeaderFactory{
    h:HttpHeaders;
    
    Create(type:string):HttpHeaders{
 
        if(type == "Basic"){
            
            let headerObj = {
                'Authorization': `Basic ${btoa(appKey + ":" + appSecret)}`,
                'Content-Type': 'application/json'
            };
            
            return new HttpHeaders(headerObj);
        }
        else if(type == "Kinvey"){
            console.log(token);

            let headerObj = {
                'Authorization': `Kinvey ${token}`,
                'Content-Type': 'application/json'
            }  

            return new HttpHeaders(headerObj);
        }
        else{
            throw new Error(`Current Authentication type is not defined ${type}`)
        }

         
    }
}