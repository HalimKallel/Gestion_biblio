import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LivreComponent } from './livre/livre.component';
import { EditeurComponent } from './editeur/editeur.component';
import { UserComponent } from './user/user.component';
import { LivreModule } from './livre/livre.module';
import { HttpClientModule } from '@angular/common/http';
import { AuteurModule } from './auteur/auteur.module';
import { AuteurComponent } from './auteur/auteur.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { SpecialiteModule } from './specialite/specialite.module';
import { EditeurModule } from './editeur/editeur.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    LivreComponent,
    EditeurComponent,
    UserComponent,
    AuteurComponent,
    SpecialiteComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    AuteurModule,
    LivreModule,
    SpecialiteModule,
    EditeurModule
  ]
})
export class DashboardModule { }
