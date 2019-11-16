import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ListarAutoresComponent} from './components/listar-autores/listar-autores.component';
declare const Swal: any;


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  @ViewChild(ListarAutoresComponent, {static: false}) listar: ListarAutoresComponent;

  constructor() { }

  ngOnInit() {
  }
  refresh(e) {
    this.listar.getautores();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registro Gurdado de manera Exitosa.',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
