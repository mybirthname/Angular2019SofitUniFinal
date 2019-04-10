import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';


export class AppHttpErrorInterceptor implements HttpInterceptor
{

    constructor(){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req.clone()).pipe(tap((success)=>{
          }),
          catchError((err)=>{
              throw err;
            }));
    }    
    
}
    
