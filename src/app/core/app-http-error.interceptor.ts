import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class AppHttpErrorInterceptor implements HttpInterceptor
{

    constructor(private toastr:ToastrService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req.clone()).pipe(tap((success)=>{
          }),
          catchError((err)=>{
              this.toastr.error(err.error.description);
              throw err;
            }));
    }    
    
}
    
