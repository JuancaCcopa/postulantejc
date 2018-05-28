
import {Injectable} from "@angular/core";
@Injectable()

export class SalaServices{

    salas:any=[
        {  sala_id:1,nombresala:'AUDITORIO',maximo_asistente:5  }
    ];


    public getSalas()
    {
        return this.salas;
    }

    public buscarSala(idSala)
    {
        let res=this.salas.find(j=>j.sala_id==idSala);
        return res;
    }


    public saveSala(sala)
    {
        let insert={sala_id:sala.sala_id,nombresala:sala.nombresala,maximo_asistente:sala.maximo_asistente};
        this.salas.push(insert);
        console.log(this.salas);
    }

}