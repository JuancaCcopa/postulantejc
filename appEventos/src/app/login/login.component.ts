import { Component } from "@angular/core";
import { Router } from '@angular/router'; 

import { HttpClient,HttpHeaders } from '@angular/common/http';

import {userinterface} from './datos.interfaz'
import { PARAMETERS } from "@angular/core/src/util/decorators";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};


@Component(
    {
        selector: 'app-login',
        templateUrl: './login.component.html'
    })
    
   

export class LoginComponent
    {


        user:any={login:'postulante@tektonlabs.com',password:'123'};
        message:any;
        constructor(private router: Router,private http: HttpClient) { 
        } 

        entrar(event)
        {
              let elem = event.target;
                let usuario= this.user.login;
                let password= this.user.password;

                let sendData={usuario:usuario,password:password};
                let formData = new FormData();
  		        formData.append('datos', JSON.stringify(sendData));

                this.http.post<userinterface>('http://localhost/api/validate.php',formData).subscribe(
                    res => {
                        
                        if(res.message!='ok')
                        {
                            this.message=res.message;
                        }else{
                            this.router.navigate(['/home']);
                        }
                    },
                    err => {
                        console.log(err);
                    });
            
           
        }
        
                
    }