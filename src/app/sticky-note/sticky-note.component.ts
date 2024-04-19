import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { Tarea } from 'src/tareas';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss'],
})
export class StickyNoteComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  tareas: Tarea[] = [];

  async abrirModal(){
    const modal = await this.modalController.create({
      component: AgregarTareaComponent
    });

    modal.onDidDismiss().then(data => {
      if (data.role === 'ok') {
        const nuevaTarea = data.data; // Datos de la nueva tarea
        this.tareas.push(nuevaTarea); // Agrega la nueva tarea al arreglo
      }
    });

    return await modal.present();
  }

}
