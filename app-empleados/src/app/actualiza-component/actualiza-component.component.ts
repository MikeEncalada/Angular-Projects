import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent implements OnInit{

  //Router para redirigir a otras paginas
  //ActivatedRoute para leer la info que viene de otras paginas (parámetros)
  constructor(private router:Router, private route:ActivatedRoute,  private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {
    this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  
  empleados: Empleado[] = [];
  accion: number;

  volverHome() {
    this.router.navigate(['']);
  }

  /*
  actualizaEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    this.router.navigate(['']);
  }

  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }
  */

  actualizaEmpleado() {

    if(this.accion == 1){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
      this.router.navigate(['']);
    }else{
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice: number;
}
