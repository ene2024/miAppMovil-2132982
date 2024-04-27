import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/tareas';
import { ModalController } from '@ionic/angular';
import { AgregaTareasService } from '../agrega-tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalController : ModalController, private tareaServicio:AgregaTareasService) { } 

  tareaServicioArray: Tarea[] = this.tareaServicio.tareas;

  ngOnInit() {}

  tareaNombre: string ='';

  nuevaTarea: Tarea = {
    titulo: '',
    fecha: '',
    descripcion: ''
  };


  submit(): void{
    this.tareaServicio.agregarTarea(this.nuevaTarea);
  }

  cerrarModal(): void{
    this.modalController.dismiss();
  }

}
