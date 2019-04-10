import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationHeaderFactory } from './authentication-header.factory';

const apiUrl = environment.apiUrl;

export class AppHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.params.get('AuthenticationType')){
            throw new Error('AuthenticationType param is required to indicate what kind of authentication you need')
        }

        let headers = new AuthenticationHeaderFactory().Create(req.params.get('AuthenticationType'));
        
        let cloneRequest = req.clone({
            url: `${apiUrl}/${req.url}`,
            params: req.params.delete('AuthenticationType'),
            headers: headers
        });
        

        return next.handle(cloneRequest);
    }

}