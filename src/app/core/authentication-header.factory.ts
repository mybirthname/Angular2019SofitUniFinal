import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const appKey= environment.appKey;
const appSecret = environment.appSecret;
const token = localStorage.getItem('token');

export class AuthenticationHeaderFactory{
    h:HttpHeaders;
    
    Create(type:string): HttpHeaders{
        this.h = new HttpHeaders();
        if(type == "Basic"){
            this.h.append('Authorization', `Basic ${atob(`${appKey}:${appSecret}`)}`);
        }
        else if(type == "Kinvey"){
            this.h.append('Authorization', `Kinvey ${token}`);
        }
        else{
            throw new Error(`Current Authentication type is not defined ${type}`)
        }

        return this.h;
    }
}