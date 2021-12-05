import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient
  ) {

  }

  createUser(user:User):Observable<any> {
    return this.http.post('signup',user);
  }

  login(user:User): Observable<any>{
    return this.http.post('users/login',user);
  }

}
