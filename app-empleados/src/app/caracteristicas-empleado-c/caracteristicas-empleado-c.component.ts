import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

  constructor(private miServicio: ServicioEmpleadosService) { }

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string){
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
