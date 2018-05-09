import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [

  ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: '',
    apellido: '',
    email: '',
    pais: '',
    sexo:'Hombre',
    acepta:true
  }

  paises= [
    { codigo: 'ESP', nombre: 'España' },
    { codigo: 'ENG', nombre: 'Reino Unido' },
    { codigo: 'FR', nombre: 'Francia' },
    { codigo: 'PT', nombre: 'Portugal' }
  ]

  sexos:String[]=["Hombre","Mujer"];

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
