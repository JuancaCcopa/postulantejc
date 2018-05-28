
import {Injectable} from "@angular/core";
@Injectable()

export class CharlasServices{

    charlas:any=[
        {  charla_id:1,salas_id:1,tema:'tecnologias moviles',expositor_id:1  },
        {  charla_id:2,salas_id:1,tema:'tecnologias android',expositor_id:2  },
        {  charla_id:3,salas_id:1,tema:'tecnologias xamarin',expositor_id:2  },
        {  charla_id:4,salas_id:1,tema:'tecnologias .Net',expositor_id:1  },
        {  charla_id:5,salas_id:1,tema:'tecnologias C#',expositor_id:1  }
    ];


    public getCharlas()
    {
        return this.charlas;
    }

    public buscarbySalaid(idCharla)
    {
        var res=this.charlas.find(j=>j.charla_id==idCharla);
        console.log(res);
        return res.salas_id;
    }

    public saveCharla(charla)
    {
        let insert={ charla_id:charla.charla_id,salas_id:charla.salas_id,tema:charla.tema  };
        this.charlas.push(insert);
        console.log(insert);
    }

}