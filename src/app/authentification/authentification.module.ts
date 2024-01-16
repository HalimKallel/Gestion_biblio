import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule
  ]
})
export class AuthentificationModule { }
