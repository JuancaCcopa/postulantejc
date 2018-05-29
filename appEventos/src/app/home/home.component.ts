import { Component } from "@angular/core";
import { LoginServices } from "../services/login.service";

@Component(
    {
        selector: 'app-home',
        templateUrl: './home.component.html'
    })
    
export class HomeComponent
    {
        
        constructor (private loginServices:LoginServices){}
        tipo=this.loginServices.tipo;        
                
                
    }
