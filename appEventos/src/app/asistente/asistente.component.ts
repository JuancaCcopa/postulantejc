import { Component } from "@angular/core";

import { CharlasServices } from '../services/charla.service';
import { HorariosServices } from '../services/horario.service';

import { AsistenteServices } from '../services/asistente.service';
import { SalaServices } from '../services/sala.service.';
import { HttpClient } from '@angular/common/http';


//import { userInfo } from "os";
import {GlobalService} from '../global.component';
//import { error } from "util";

@Component(
    {
        selector: 'app-asistente',
        templateUrl: './asistente.component.html'
    })
    
export class AsistenteComponent
    {
      
        asistente:any={tipo:"GENERAL"};
        asistentes:any=[];
        charlas:any=[];
        horarios:any=[];
        
        constructor(private http: HttpClient,protected asistenteServices:AsistenteServices,private charlaServices:CharlasServices,private horariosServices:HorariosServices,private salaServices:SalaServices,private globalService:GlobalService)
        {  
            
            this.charlas= charlaServices.getCharlas();
            this.horarios=horariosServices.getHorarios();
            this.asistentes=asistenteServices.getAsistente();

            this.globalService.gusuario=true;
            
        }
    
       
       
        
        saveAsistente()
        {    

            

            console.log(" charla_id" + this.asistente.charla_id);
            var id_sala= this.charlaServices.buscarbySalaid(this.asistente.charla_id);
            console.log(id_sala);
            var resulSala =this.salaServices.buscarSala(id_sala);
            console.log(resulSala);

            if(this.asistentes.length==(resulSala.maximo_asistente+1))
            {
                alert("CAPACIDAD MAXIMA DE "+resulSala.maximo_asistente);
            }else{

                this.asistenteServices.saveAsistente(this.asistente);
                console.log(this.asistenteServices.getAsistente());

            }

            
        }
        
    }
    