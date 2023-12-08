import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { ViewedComponent } from './viewed/viewed.component';
import { CreateedComponent } from './createed/createed.component';
import { EditedComponent } from './edited/edited.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
   { path: 'editeurs', redirectTo: 'editeurs', pathMatch: 'full'},
   { path: 'editeurs/:editeursId/view', component:ViewedComponent},
   { path: 'editeurs/create', component:CreateedComponent},
   { path: 'editeurs/:editeursId/edit', component:EditedComponent},
   ],
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditeurRoutingModule { }
