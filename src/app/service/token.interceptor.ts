import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const skipUrl: string | string[] = [
      'http://localhost:4200/api/v1/usermodule/login',
      'https://demo.credy.in/api/v1/usermodule/login/'
    ]
    if (skipUrl.indexOf(request.url) === -1) {
      let value=localStorage.getItem('token');
    if(value){
      request = request.clone({
        setHeaders: {
            'Content-Type':'application/json',
            'Authorization': `${value}`,
        }
    });
    }
  }
    return next.handle(request);
  }
}
