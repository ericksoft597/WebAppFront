import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-areas',
  templateUrl: './crud-areas.component.html',
  styleUrls: ['./crud-areas.component.css']
})
export class CrudAreasComponent implements OnInit {

  public areasForm: FormGroup;

  
  constructor( protected fb:FormBuilder) { 
    this.createAreasForm()
  }

  createAreasForm(){
                    this.areasForm = this.fb.group(
                        {
                          codigo: ['',[Validators.required,
                                       Validators.maxLength(5) 
                                      ]
                                  ],
                          descripcion:''
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
