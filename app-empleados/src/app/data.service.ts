//El nombre por convención suele ser data.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { response } from "express";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataService { 

    constructor(private httpClient:HttpClient, private loginService:LoginService) {
        
    }

    cargarEmpleados() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get("https://mis-clientes-27d13-default-rtdb.firebaseio.com/datos.json?auth=" + token);
    }   

    guardarEmpleados(empleados:Empleado[]) {
        //Lo estamos haciendo con el servicio (aplicación) Realtime Database 
        //Se coloca el enlace que nos provee firebase y colocamos datos.json al final
        //El segundo argumento será lo que se desea guardar
        this.httpClient.put("https://mis-clientes-27d13-default-rtdb.firebaseio.com/datos.json", empleados).subscribe(
            response => console.log("Se han guardado los empleados: " + response),
            error => console.log("Se ha producido un error: " + error),
        );
        //post crea otra colleción en cambio put reemplaza la collección 
    }

    actualizarEmpleado(indice: number, empleado: Empleado) {
        let url = "https://mis-clientes-27d13-default-rtdb.firebaseio.com/datos/" + indice + ".json";

        this.httpClient.put(url,empleado).subscribe(
            response => console.log("Se ha modificado correctamente el empleado: " + response),
            error => console.log("Se ha producido un error: " + error),
        );
    }

    eliminarEmpleado(indice: number) {
        let url = "https://mis-clientes-27d13-default-rtdb.firebaseio.com/datos/" + indice + ".json";

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado correctamente el empleado: " + response),
            error => console.log("Se ha producido un error: " + error),
        );
    }


}