import { Injectable } from '@angular/core';
import { Tarea } from 'src/tareas';

@Injectable({
  providedIn: 'root'
})
export class AgregaTareasService {

  constructor() { }

  tareas : Tarea[] = [{
    titulo: "Tarea 1",
    fecha: "2024-01-01",
    descripcion: "Comunicacion entre Componentes"
  },
  {
    titulo: "Tarea 2",
    fecha: "2024-01-02",
    descripcion: "Utilizar servicios para cargar tareas"
  }];

  getTareas() {
    return this.tareas;
  }

  agregarTarea(tareaNueva: Tarea){

    this.tareas.push(tareaNueva);
    //Agrega una Tarea al Arreglo
  }
}