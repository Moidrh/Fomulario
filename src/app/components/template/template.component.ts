import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red
    }
    `
  ]
})
export class TemplateComponent {

  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  },
  {
    codigo: 'COL',
    nombre: 'Colombia'
  }
];

sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() { }

  guardar( forma: NgForm ) {
    console.log('Formulario Posteado');
    console.log( 'ngForm', forma );
    console.log('Valor forma', forma.value);
    console.log('Usuario', this.usuario);
    
  }

}
