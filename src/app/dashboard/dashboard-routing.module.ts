// dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LivreComponent } from './livre/livre.component';
import { EditeurComponent } from './editeur/editeur.component';
import { AuteurComponent } from './auteur/auteur.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { authGuard } from '../authentification/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [


      
      { path: 'sidenav', component: SidenavComponent },
      { path: 'auteur', component: AuteurComponent },
      { path: 'livre', component: LivreComponent },
      {path:'specialite', component:SpecialiteComponent},
      { path: 'editeur', component: EditeurComponent },
      { path: '', redirectTo: 'sidenav', pathMatch: 'full' }, 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
