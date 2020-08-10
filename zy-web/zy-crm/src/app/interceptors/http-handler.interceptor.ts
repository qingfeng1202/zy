import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request.clone({
      url: 'http://localhost:8080' + request.url,
      setHeaders: {
        'token': 'aaa'
      },
    })

    return next.handle(req).pipe( tap(
      event => {
        if (event instanceof HttpResponse) {
          console.log(event);
          // if (event.status >= 500) {
          //   // 跳转错误页面
          // }
        }
      },
      error => {
        // token过期 服务器错误等处理
        console.log(error);
      }));
  }
}
