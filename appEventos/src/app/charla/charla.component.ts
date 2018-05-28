import { Component } from "@angular/core";

import { CharlasServices } from '../services/charla.service';
import { SalaServices } from '../services/sala.service.';
import { ExpositorServices } from '../services/expositor.service';


@Component(
    {
        selector: 'app-asistente',
        templateUrl: './charla.component.html'
    })
    
export class CharlaComponent
    {
        exporitor:any={expositor_id:1};
        sala:any={sala_id:1};

        charla:any={};
        charlas:any=[];
        salas:any=[];
        exporitores:any=[];
        constructor(protected charlasServices:CharlasServices,private salaServices:SalaServices,private expositorServices:ExpositorServices)
        {  
            this.charlas= charlasServices.getCharlas();
            this.salas= salaServices.getSalas();
            this.exporitores=expositorServices.getExpositor();
        }
        
        saveCharla()
        {
            this.charla.charla_id= this.charlas.length + 1;
            this.charlasServices.saveCharla(this.charla);
        }
        
                
    }