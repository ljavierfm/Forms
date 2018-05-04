import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`.ng-invalid.ng-touched:not(form){
    border:1px solid red;`

  ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: '',
    apellido: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor: ", forma.value);
    console.log("Usuario: ", this.usuario);

  }

}
