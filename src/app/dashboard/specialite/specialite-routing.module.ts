import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { ViewspComponent } from './viewsp/viewsp.component';
import { CreatespComponent } from './createsp/createsp.component';
import { EditspComponent } from './editsp/editsp.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'specialites', redirectTo: 'livres', pathMatch: 'full'},
    { path: 'specialites/:specialitesId/view', component:ViewspComponent},
    { path: 'specialites/create', component:CreatespComponent},
    { path: 'specialites/:specialitesId/edit', component:EditspComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialiteRoutingModule { }
