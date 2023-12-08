import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialiteRoutingModule } from './specialite-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatespComponent } from './createsp/createsp.component';
import { EditspComponent } from './editsp/editsp.component';
import { ViewspComponent } from './viewsp/viewsp.component';


@NgModule({
  declarations: [
    CreatespComponent,
    EditspComponent,
    ViewspComponent
  ],
  imports: [
    CommonModule,
    SpecialiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpecialiteModule { }
