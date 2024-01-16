import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AuteurModule } from './dashboard/auteur/auteur.module';
import { SpecialiteModule } from './dashboard/specialite/specialite.module';
import { AuthentificationModule } from './authentification/authentification.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    AuteurModule,
    HttpClientModule,
    SpecialiteModule,
    DashboardModule,
    AuthentificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
