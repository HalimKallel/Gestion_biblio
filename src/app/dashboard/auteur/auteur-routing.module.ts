import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
   children: [
    { path: 'auteurs', redirectTo: 'auteurs', pathMatch: 'full'},
    { path: 'auteurs/:auteursId/view', component:ViewComponent},
    { path: 'auteurs/create', component:CreateComponent},
    { path: 'auteurs/:auteursId/edit', component:EditComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuteurRoutingModule { }
