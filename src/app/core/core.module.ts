import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './app-http.interceptor';
import { AppHttpErrorInterceptor } from './app-http-error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../+store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../+store/auth/effects';
import { UserEffects } from '../+store/user/effects';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, MobileHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AuthEffects,
      UserEffects
    ])
    
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
  exports:[
    FooterComponent, 
    HeaderComponent, 
    MobileHeaderComponent,
    HttpClientModule
  ]
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
