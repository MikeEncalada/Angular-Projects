import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataService } from "./data.service";
@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataService){

    }


    setEmpleados(misEmpleados:Empleado[]){
        this.empleados = misEmpleados;
    }

    obtenerEmpleados(){
        return this.dataService.cargarEmpleados(); //Devuelve un observable
    }

    empleados: Empleado[] = [];

    /*
    empleados: Empleado[] = [
        new Empleado('Andres', 'Hernandez', 'Presidente', 2000),
        new Empleado('Sara', 'Lara', 'Jefe', 1500),
        new Empleado('Diego', 'Villalobos', 'Director', 1000),
        new Empleado('Carlos', 'Chamba', 'Administrativo', 1700)
    ]
    */

    agregarEmpleadoServicio(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje("El empleado se cargo con exito: " + "\n" + "Nombre: " + empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);

        this.dataService.guardarEmpleados(this.empleados);
    }

    encontrarEmpleado(indice: number){
        let empleado: Empleado = this.empleados[indice];
        return empleado;
    }

    actualizarEmpleado(indice: number, empleado: Empleado){
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;

        this.dataService.actualizarEmpleado(indice, empleado);
    }

    eliminarEmpleado(indice: number){
        this.empleados.splice(indice, 1);
        this.dataService.eliminarEmpleado(indice);

        if(this.empleados != null){
            this.dataService.guardarEmpleados(this.empleados);
        }
        

    }
}