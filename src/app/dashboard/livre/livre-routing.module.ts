import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from '../dashboard.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
  { path: 'livres', redirectTo: 'livres', pathMatch: 'full'},
  { path: 'livres/:livresId/view', component:ViewComponent},
  { path: 'livres/create', component:CreateComponent},
  { path: 'livres/:livresId/edit', component:EditComponent},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreRoutingModule { }
