import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS ,HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import {GithubApiService} from "./services/github-api.service";
import {SamplesHeaderInterceptorService} from "./services/samples-header-interceptor.service";
import {SamplesErrorInterceptorService} from "./services/samples-error-interceptor.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GithubApiService,
    {provide: HTTP_INTERCEPTORS, useClass: SamplesHeaderInterceptorService, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: SamplesErrorInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
