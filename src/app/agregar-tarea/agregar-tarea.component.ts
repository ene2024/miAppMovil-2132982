import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/tareas';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalController : ModalController) { } 

  ngOnInit() {}

  async agregarTarea(){
    await this.modalController.dismiss(this.agregarTarea)
  }

  nuevaTarea: Tarea = {
    titulo: '',
    fechaMes: 1,
    fechaAnio: 1,
    descripcion: ''
  };


}
