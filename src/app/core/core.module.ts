import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './app-http.interceptor';
import { AppHttpErrorInterceptor } from './app-http-error.interceptor';



@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers:[
    { 
    provide:HTTP_INTERCEPTORS, 
    useClass: AppHttpInterceptor,
    multi: true
  },
  { 
    provide:HTTP_INTERCEPTORS, 
    useClass: AppHttpErrorInterceptor,
    multi: true
  }],
  exports:[FooterComponent, HeaderComponent]
})
export class CoreModule { 

  //Core module needs to be loaded once to ensure singleton services
  //https://angular.io/guide/singleton-services#prevent-reimport-of-the-greetingmodule
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if(parentModule){
      throw new Error('Core Module is already loaded');
    }
  }
}
