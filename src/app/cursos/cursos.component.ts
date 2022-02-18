import {Component} from '@angular/core'
import { CursosService } from './cursos.service';

@Component ({
    selector: 'cursos', // <cursos>
    template: `
        <h2>{{ "Texto: " + getTexto() }}</h2>
        <ul>
            <li *ngFor="let curso of cursos">
                {{ curso }}
            </li>
        </ul>
        `
})
export class CursosComponent {

    title = "Lista de cursos";
    text = "Component Template para Cursos";

    //cursos = ["Curso 1", "Curso 2", "Curso 3"];
    cursos;

    // Lógica para chamar serviço HTTP
    /*constructor() {
        let service = new CursosService();
        this.cursos = service.getCursos();
    }*/

    // Usando Injecao de Dependencia
    // Arquivo app.module.ts
    constructor(service: CursosService) {
        this.cursos = service.getCursos();    
    }


    getTexto() {
        return this.text;
    }
}