import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-editorial',
  templateUrl: './crud-editorial.component.html',
  styleUrls: ['./crud-editorial.component.css']
})
export class CrudEditorialComponent implements OnInit {

  public codigo:string;

  public descripcion:string;

  

  constructor() { }

  ngOnInit() {
  }

  // metodo para salvar información
  saveform() {

    if (this.codigo==undefined || this.codigo.length==0){ 
      alert("la descripcion es requerida");
    }
  }

  showlength(dato,max){
    console.log(dato);

    if (dato.length > max){
      alert("El tamaño supera requerido");
      
    } 

  }

}
