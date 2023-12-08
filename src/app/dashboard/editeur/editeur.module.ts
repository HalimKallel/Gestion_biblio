import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditeurRoutingModule } from './editeur-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateedComponent } from './createed/createed.component';
import { EditedComponent } from './edited/edited.component';
import { ViewedComponent } from './viewed/viewed.component';


@NgModule({
  declarations: [
    CreateedComponent,
    EditedComponent,
    ViewedComponent
  ],
  imports: [
    CommonModule,
    EditeurRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditeurModule { }
