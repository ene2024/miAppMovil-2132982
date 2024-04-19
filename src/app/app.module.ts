import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent, StickyNoteComponent, AgregarTareaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
