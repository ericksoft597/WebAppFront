import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ListarAutoresComponent} from './components/listar-autores/listar-autores.component';
import {CrudAutoresComponent} from './components/crud-autores/crud-autores.component';
declare const Swal: any;



@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  @ViewChild(ListarAutoresComponent, {static: false}) listar: ListarAutoresComponent;
  @ViewChild(CrudAutoresComponent, {static: false}) crud: CrudAutoresComponent;


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



  refresh1(e){

    //this.crud.createAutoresForm(newdescr,true, newid);
    console.log(e);
    this.crud.buscarAutoresForm(true, e);
  }


}
