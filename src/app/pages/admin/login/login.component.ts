import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginobj: any = {
    userName: '',
    password: '',
  };

  constructor (private router: Router) {}

  onLogin(){
    if(this.loginobj.userName=="admin" && this.loginobj.password=="1234"){
      this.router.navigateByUrl('home');
    }
    else{ 
      alert('Wrong Credentials')

    }
  }
}
