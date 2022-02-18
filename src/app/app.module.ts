import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent, 
    CursosComponent, 
    CursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
