import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {ToastrService} from '../../../node_modules/toastr'

export class AppHttpErrorInterceptor implements HttpInterceptor
{

    constructor(private toaster: ToastrService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req.clone()).pipe(tap((success)=>{
          }),
          catchError((err)=>{
              this.toaster.error(err.error.message, 'Error');
              throw err;
            }));
    }    
    
}
    
