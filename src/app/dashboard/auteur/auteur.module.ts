import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuteurRoutingModule } from './auteur-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    AuteurRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuteurModule { }
