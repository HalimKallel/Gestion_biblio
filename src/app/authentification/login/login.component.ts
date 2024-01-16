import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService,public router: Router){}
email:string=''
password:string=''

loginUser() {
const userlogin={
email:this.email,
password:this.password
}
this.authService.signIn(userlogin);
this.router.navigate(['livre']);
}
}
