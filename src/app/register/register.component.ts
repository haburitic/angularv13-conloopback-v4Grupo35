import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../Model/role';
import { User } from '../Model/user';
import { TokenService } from '../service/token.service';
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
    private userService:UserService,
    private tokenService:TokenService,
    private router: Router

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
        this.tokenService.singnOut();
        this.router.navigate(['/login']);

      },
      error: (err)=> {
        this.isSuccessful=false;
        this.isSignUpFailed = true;
        this.tokenService.singnOut();
        if(err.status===404){
          this.errorMessages='Servidor no existe';
        }else{
          this.router.navigate(['/login']);

        }
        console.error('Error: ' + err.message);

      },
        complete:()=>{
          console.log('Completed');
      }
    });
  }

}
