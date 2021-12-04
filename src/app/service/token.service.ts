import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  TOKEN_KEY='auth_token';
  USER_KEY='auth_user';


  constructor() { }

  singnOut():void{
    sessionStorage.clear();
  }

  saveToken(token: string):void{
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.setItem(this.TOKEN_KEY,token);
  }

  getToken(): string | null{
    return  sessionStorage.getItem(this.TOKEN_KEY);

  }

  saveUser(user:User):void{
    sessionStorage.removeItem(this.USER_KEY);
    sessionStorage.setItem(this.USER_KEY,JSON.stringify( user));
  }

  getUser():any{
    const user= sessionStorage.getItem(this.USER_KEY);
    if(user){
      return JSON.parse(user);
    }
    return {};
  }

}
