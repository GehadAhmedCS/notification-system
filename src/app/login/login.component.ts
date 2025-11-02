import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string=""
  password:string=""
  errormsg:string=""

  validuser={
       username:"ahmed",
       password:"gehad"

  }
  router=inject(Router)
  login(){
    if(this.username===this.validuser.username&&this.password===this.validuser.password){
      this.router.navigate(["/home"])
    }else{
      this.errormsg="invalid username or password "
    }
  }

}
