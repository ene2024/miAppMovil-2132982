import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { Tarea } from 'src/tareas';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss'],
})
export class StickyNoteComponent  implements OnInit {

  constructor(private modalController: ModalController, private tareaServicio:TareasService ) { }

  tareas: Tarea[] = [];

  ngOnInit() {
    this.tareas = this.tareaServicio.getTareas();
  }


  async abrirModal(){
    const modal = await this.modalController.create({
      component: AgregarTareaComponent
    });

    return await modal.present();
  }


  eliminarTarea(tarea: Tarea){
    this.tareaServicio.eliminarTarea(tarea);
  }
}
