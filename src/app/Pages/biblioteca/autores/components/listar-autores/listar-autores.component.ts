import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CategoryGradeService} from '../../../../../data/category-grade.service';
import {CrudAutoresComponent} from '../crud-autores/crud-autores.component';
import {AutoresComponent} from '../../autores.component';
declare const Swal: any;

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {
  @Output() salida1: EventEmitter<string> = new EventEmitter<string>();
  constructor(protected service: CategoryGradeService) { }

  categories: any;
  ngOnInit() {
    this.getautores();

  }
  getautores(){
    this.service.getcategorygrades().subscribe(resp => {
      this.categories = resp;
    });
  }

  deleteautor(id: number ) {
    Swal.fire({
      title: 'Eliminar',
      text: "Esta Seguro de Eliminar Este Registro?!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
      if (result.value) {
        this.deleterow(id);

      }
    })
  }

  deleterow(id: number){
    this.service.deletecategorygrade(id).subscribe(
      data => {
        Swal.fire(
          'Deleted!',
          'Eliminado.',
          'success'
        );
        this.getautores();
      } , error => {
        Swal.fire(
          'Deleted!',
          'No Eliminado.',
          'error'
        );
        this.getautores();
      }
    );
  }


  updateAutor(id1) {
     this.salida1.emit(id1);

  }


}
