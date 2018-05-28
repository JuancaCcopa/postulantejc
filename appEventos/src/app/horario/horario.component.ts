import { Component } from "@angular/core";

import { HorariosServices } from '../services/horario.service';

@Component(
    {
        selector: 'app-horario',
        templateUrl: './horario.component.html'
    })
    
export class HorarioComponent
    {
        horario:any={};
        horarios:any=[];
        constructor(protected horariosServices:HorariosServices)
        {  
            console.log(horariosServices.getHorarios());
            this.horarios= horariosServices.getHorarios();

        }
        
        saveHorario()
        {
            this.horariosServices.saveHorario(this.horario);
        }
                
    }