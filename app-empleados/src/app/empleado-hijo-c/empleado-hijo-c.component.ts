import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {

  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  arrayCaracteristicas = [''];
  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
