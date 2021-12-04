import { Component, OnInit } from '@angular/core';
import { Role } from '../Model/role';
import { User } from '../Model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessages='';

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  listaRoles: Role[] = [
    { id: 0, name: '---' },
    { id: 1, name: 'User' },
    { id: 2, name: 'Admin' },
  ];

  signUp():void {
    console.log("signUp");
  }

  onSubmit():void {
    this.userService.createUser(this.user).subscribe({
      next: (response)=> {

        console.log(response);
        this.isSuccessful=true;
        this.isSignUpFailed = false;

      },
      error: (err)=> {
        this.isSuccessful=false;
        this.isSignUpFailed = true;
        if(err.status===404){
          this.errorMessages='Servidor no existe';
        }
        console.error('Error: ' + err.message);

      },
        complete:()=>{
          console.log('Completed');
      }
    });
  }

}
