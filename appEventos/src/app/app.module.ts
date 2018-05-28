import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { Routes,RouterModule }  from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AsistenteComponent} from './asistente/asistente.component';
import {CharlaComponent} from './charla/charla.component';
import {SalaComponent} from './sala/sala.component';
import {HorarioComponent} from './horario/horario.component';
import {ExpositorComponent} from './expositor/expositor.component';


import { CharlasServices } from './services/charla.service';
import { HorariosServices } from './services/horario.service';
import { AsistenteServices } from './services/asistente.service';
import { SalaServices } from './services/sala.service.';
import { ExpositorServices } from './services/expositor.service';

import {GlobalService} from './global.component';

const appRoutes: Routes=[

{path:'', component:LoginComponent },
{ path:'app', component:AppComponent },
{ path:'home', component:HomeComponent },
{ path:'asistente', component:AsistenteComponent },
{ path:'charla', component:CharlaComponent },
{ path:'sala', component:SalaComponent },
{ path:'horario', component:HorarioComponent },
{ path:'expositor', component:ExpositorComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AsistenteComponent,
    CharlaComponent,
    SalaComponent,
    HorarioComponent,
    ExpositorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // LoginModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    CharlasServices,
    HorariosServices,
    AsistenteServices,
    SalaServices,
    ExpositorServices,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
