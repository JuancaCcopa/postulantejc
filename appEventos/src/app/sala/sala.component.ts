import { Component } from "@angular/core";

import { SalaServices } from '../services/sala.service.';

@Component(
    {
        selector: 'app-sala',
        templateUrl: './sala.component.html'
    })
    
export class SalaComponent
    {
        sala:any={};
        salas:any=[];
        constructor(protected salaServices:SalaServices)
        {  
            this.salas= salaServices.getSalas();
            console.log(salaServices.getSalas());
        }
        
        saveSala()
        {
            this.sala.sala_id= this.salas.length +1;
            this.salaServices.saveSala(this.sala);
        }
        
                
    }