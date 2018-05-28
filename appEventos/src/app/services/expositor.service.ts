
import {Injectable} from "@angular/core";
@Injectable()

export class ExpositorServices{

    expositor:any={};
    expositores:any=[
        {  expositor_id:1,nombre:'ALFREDO',edad:35  },
        {  expositor_id:2,nombre:'FAVIOLA',edad:25  }
    ];

    public getExpositor()
    {
        return this.expositores;
    }

    public saveExpositor(expositor)
    {
        this.expositores.push(expositor);
        
    }

}