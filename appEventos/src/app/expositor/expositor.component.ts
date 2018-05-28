import { Component } from "@angular/core";

import { ExpositorServices } from '../services/expositor.service';

@Component(
    {
        selector: 'app-expositor',
        templateUrl: './expositor.component.html'
    })
    
export class ExpositorComponent
    {
        expositor:any={};
        expositores:any=[];
        constructor(protected expositorServices:ExpositorServices)
        {  
            this.expositores= expositorServices.getExpositor();
        }
        
        saveExpositor()
        {
            this.expositorServices.saveExpositor(this.expositor);
        }
        
                
    }