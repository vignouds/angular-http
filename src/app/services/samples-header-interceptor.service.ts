import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable}  from 'rxjs';

@Injectable()
export class SamplesHeaderInterceptorService implements HttpInterceptor {

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    if(req.url.includes('sample.com')){
      const clone = req.clone({setHeaders:{'Content-type':'application/json'}});

      return next.handle(clone);
    }
    return next.handle(req);
  }
}
