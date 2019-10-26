import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-existencia',
  templateUrl: './crud-existencia.component.html',
  styleUrls: ['./crud-existencia.component.css']
})
export class CrudExistenciaComponent implements OnInit {

  // 1) declara propiedad tipo formgroup  
  public existenciaForm:FormGroup;




  constructor(  protected fb: FormBuilder) {
    this.createExistenciaForm()
   }


  // 3) crea metodo para construir el formulario
  createExistenciaForm(){
    this.existenciaForm = this.fb.group(
      {
      codigo: ['',[
                    Validators.required,
                    Validators.maxLength(5)
                  ]
              ],
      descripcion: '',
      cantidad: 0
      } 
      )
  }

  ngOnInit() {
  }

  // metodo para salvar información
  saveform(data) {

    alert(JSON.stringify(data))
  }


}
