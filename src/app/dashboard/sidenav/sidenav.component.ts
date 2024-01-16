import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(public authService:AuthService,private router: Router) {}

  logout(): void {
    this.authService.doLogout()
  }
}
