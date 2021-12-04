import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL='http//localhost:3000/';

  httpOptions={
    headers: new HttpHeaders(
      {'Content-Type':'application/json'}
    )
  };

  constructor(
    private http: HttpClient
  ) {

  }

  createUser(user:User):Observable<any> {
    return this.http.post(this.API_URL+'signup',user,this.httpOptions);
  }

  login(user:User): Observable<any>{
    return this.http.post(this.API_URL+'users/login',user,this.httpOptions);
  }

}
