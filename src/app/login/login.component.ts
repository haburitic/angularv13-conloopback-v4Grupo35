import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { TokenService } from '../service/token.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessages='';

  constructor(
    private userService:UserService,
    private tokenService:TokenService
    ) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.userService.login(this.user).subscribe({
      next: (data)=>{
        this.tokenService.saveToken(data.token);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
      },
      error: (error)=>{
        this.isSuccessful = false;
        this.isSignUpFailed = true;
        this.tokenService.singnOut();
      },
      complete: ()=>{
        console.log("complete");
      }
    });
  }
}
