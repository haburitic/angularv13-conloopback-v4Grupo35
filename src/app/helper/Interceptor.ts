import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../service/token.service";
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{
  TOKEN_HEADER_KEY='Authorization';
  constructor(
    private tokenService:TokenService
    ){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq=req;
    const token= this.tokenService.getToken();
    if(token!=null){
      authReq=req.clone({
        headers:req.headers
        .append('Authorization','Bearer '+token)
        .append('Content-Type','application/json'),
        url: environment.urlBack+req.url
      });
    }
    return next.handle(authReq);
  }

}
