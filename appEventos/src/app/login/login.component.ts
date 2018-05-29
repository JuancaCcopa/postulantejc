import { Component } from "@angular/core";
import { Router } from '@angular/router'; 

import { HttpClient,HttpHeaders } from '@angular/common/http';

import {userinterface} from './datos.interfaz'
import { PARAMETERS } from "@angular/core/src/util/decorators";
import { LoginServices } from "../services/login.service";


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Component(
    {
        selector: 'app-login',
        templateUrl: './login.component.html'
    })
    
   

export class LoginComponent
    {

        
        user:any={login:'admin@tektonlabs.com',password:'123'};
        message:any;
        resultMessage:any=true;
        constructor(private router: Router,private http: HttpClient,private loginServices:LoginServices) { 
            
        } 

        entrar(event)
        {
              let elem = event.target;
                let usuario= this.user.login;
                let password= this.user.password;

                let sendData={usuario:usuario,password:password};
                let formData = new FormData();
  		        formData.append('datos', JSON.stringify(sendData));
                //http://wreckful-sprayers.000webhostapp.com
                this.http.post<userinterface>('http://wreckful-sprayers.000webhostapp.com/api/validate.php',formData).subscribe(
                    res => {
                        console.log(res);
                        if(!res.result)
                        {
                            this.resultMessage=res.result;
                            this.message=res.mensaje;
                        }else{
                            this.loginServices.tipo=res.tipo;
                            this.router.navigate(['/home']);
                        }
                    },
                    err => {
                        console.log(err);
                    });
            
           
        }
        
                
    }