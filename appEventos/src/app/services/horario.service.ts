
import {Injectable} from "@angular/core";
@Injectable()

export class HorariosServices{

    horarios:any = [
        {horario_id: 1, fechainicio: '25-05-2018', horainicio:'10:00',horafin:'11:00'},
        {horario_id: 2, fechainicio: '01-06-2018', horainicio:'12:00',horafin:'14:00'}
    ];

    public getHorarios()
    {
        return this.horarios;
    }


    public saveHorario(horario)
    {
       this.horarios.push(horario);
        console.log(horario);
    }

}