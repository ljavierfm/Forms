import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: any = {
    nombreCompleto: {
      nombre: 'Javier',
      apellido: 'Fernández'
    },
    correo: 'bitoman@gmail.com',
    pasatiempos: ['correr', 'dormir', 'comer']
  }

  constructor() {

    console.log(this.usuario);


    this.forma = new FormGroup(
      {
        'nombreCompleto': new FormGroup({
          'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
          'apellido': new FormControl('',[Validators.required,this.noFernandez])
        }),
        'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
        'pasatiempos': new FormArray([
          new FormControl('Correr',Validators.required)
        ])
      }
    )

    // this.forma.setValue(this.usuario);
  }

  guardarCambios() {
    console.log(this.forma);

    // this.forma.reset({
    //   nombreCompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // }
    // );
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('',Validators.required));
  }

  noFernandez(control:FormControl):{[s:string]:boolean}{
    if (((control.value).toLowerCase())==='fernandez'){
      return {noFernandez:true}
    }

    return null;
  }

  ngOnInit() {
    console.log(this.forma);
  }

}
