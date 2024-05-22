import { Injectable } from '@angular/core';
import { Tarea } from 'src/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareas: Tarea[] = [];

  getTareas(){
    return this.tareas;
  }

  agregarTarea(tarea : Tarea){
    this.tareas.push(tarea);
  }

  eliminarTarea(tarea : Tarea){
    let position: number = this.tareas.indexOf(tarea);
    this.tareas.splice(position,1);
  }
}
