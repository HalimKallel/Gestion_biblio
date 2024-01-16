import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authserv:AuthService,private router:Router){}
  user:User=new User()
  registerUser=()=>{
    this.authserv.signUp(this.user).subscribe((data=>{
    
    this.router.navigate(['login']);
    }))}
    
}
