import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { Tarea } from 'src/tareas';
import { AgregaTareasService } from '../agrega-tareas.service';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss'],
})
export class StickyNoteComponent  implements OnInit {

  constructor(private modalController: ModalController, private tareaServicio:AgregaTareasService ) { }

  ngOnInit() {}

  tareaServicioArray: Tarea[] = this.tareaServicio.tareas;

  async abrirModal(){
    const modal = await this.modalController.create({
      component: AgregarTareaComponent
    });

    return await modal.present();
  }

}
