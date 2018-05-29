
import {Injectable} from "@angular/core";
@Injectable()

export class AsistenteServices{

    asistentes:any=[
        {  asistente_id:1,charla_id:1,nombrecompleto:'JUAN',edad:20,tipo:'VIP'  }
    ];


    public getAsistente()
    {
        return this.asistentes;
    }

    public saveAsistente(asistente)
    {
        this.asistentes.push(asistente);
        console.log(asistente);
    }

}