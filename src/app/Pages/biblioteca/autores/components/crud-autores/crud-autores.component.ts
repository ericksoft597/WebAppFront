import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-autores',
  templateUrl: './crud-autores.component.html',
  styleUrls: ['./crud-autores.component.css']
})
export class CrudAutoresComponent implements OnInit {
  // 1) declarar propiedad tipo formgroup
  public autoresForm: FormGroup;

  //2) inyectar form builder en el constructor

  constructor( protected fb: FormBuilder) {
      this.createAutoresForm()
   }

   //3) Crear  metodo para construir formulario
   createAutoresForm(){
    this.autoresForm = this.fb.group(
      {
        codigo: ['',
          [
            Validators.required,
            Validators.maxLength(5)  
          ]
        ],
        descripcion: '',
        titulo: '',
        year: ''


      }

    );

   }

  ngOnInit() {
  }

  // metodo para salvar información
  saveform(data) {

    alert(JSON.stringify(data))
  }

 



}
