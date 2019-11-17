import {Component, EventEmitter, OnInit, Input, Output, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CategoryGradeService} from '@data/category-grade.service';
import {isBoolean} from 'util';
import {ListarAutoresComponent} from '../listar-autores/listar-autores.component';

@Component({
  selector: 'app-crud-autores',
  templateUrl: './crud-autores.component.html',
  styleUrls: ['./crud-autores.component.css']
})
export class CrudAutoresComponent implements OnInit {
  @Output() salida: EventEmitter<boolean> = new EventEmitter<boolean>();


  // 1) declarar propiedad tipo formgroup
  public autoresForm: FormGroup;

  //2) inyectar form builder en el constructor

  constructor( private service: CategoryGradeService, protected fb: FormBuilder) {
      this.createAutoresForm('', false,'');
   }

   //3) Crear  metodo para construir formulario
   createAutoresForm(desc,estado,id){
    this.autoresForm = this.fb.group(
      {
        description: [desc
          //,
          //[
            //Validators.required,
            //Validators.maxLength(5)
          //]
        ],
        estado: [estado],
        id: [id]

      }

    );

   }

  autores: any;

  ngOnInit() {
  }


  // metodo para salvar información
  saveform(data) {

    if (data.estado === true) {

      this.service.putcategorygrade(data.id,data).subscribe(data => {
        //alert('grabado con exito');
        this.salida.emit(true);
        this.autoresForm.reset();

      });

    } else {
      this.service.postcategorygrade(data).subscribe(data => {
        //alert('grabado con exito');
        this.salida.emit(true);
        this.autoresForm.reset();

      });

    }
  }

  buscarAutoresForm(estado,id){

    this.service.getcategorygrade(id).subscribe(resp => {
      this.autores = resp;
      this.createAutoresForm(this.autores.description, true, id);
    });



  }



}
