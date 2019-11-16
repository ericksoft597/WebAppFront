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
  @Input() id: number;
  // 1) declarar propiedad tipo formgroup
  public autoresForm: FormGroup;

  //2) inyectar form builder en el constructor

  constructor( private service: CategoryGradeService, protected fb: FormBuilder) {
      this.createAutoresForm()
   }

   //3) Crear  metodo para construir formulario
   createAutoresForm(){
    this.autoresForm = this.fb.group(
      {
        description: [''
          //,
          //[
            //Validators.required,
            //Validators.maxLength(5)
          //]
        ]
        //,
        //descripcion: '',
        //titulo: '',
        //year: ''


      }

    );

   }

  ngOnInit() {
  }


  // metodo para salvar información
  saveform(data) {
    this.service.postcategorygrade(data).subscribe(data=>{
      //alert('grabado con exito');
      this.salida.emit(true);
      this.autoresForm.reset();

    });

  }

  this.update.updateAutor() {

  }


}
