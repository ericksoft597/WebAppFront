import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public menu = [];


  constructor() { }

  ngOnInit() {
  this.menu = this.getmenu();
  }

  /**
  * retorna la estrutura del menu

   */

  getmenu(){
    return [
      {
      description:'Dashboard',
      link:'/Pages/dashboard',
      child: false,
      childrens: ''
    },

      {
        description:'Biblioteca',
        link: '',
        child: true,
        childrens: [{
          descripction:'Areas',
          link:'/Pages/biblioteca/areas'
        },
          {
            descripction:'Autores',
            link:'/Pages/biblioteca/autores'
          },
          {
            descripction:'Editoriales',
            link:'/Pages/biblioteca/editorial'
          },
          {
            descripction:'Libros',
            link:'/Pages/biblioteca/libros'
          }]
      },
      {
        description:'Academico',
        link: '',
        child: true,
        childrens: [{
          descripction:'Docentes',
          link:'/Pages/academico/docentes'
        },
          {
            descripction:'Estudiantes',
            link:'/Pages/academico/estudiantes'
          },
          {
            descripction:'Materias',
            link:'/Pages/academico/materias'
          },
          {
            descripction:'Grados',
            link:'/Pages/academico/grados'
          },
          {
            descripction:'Aulas',
            link:'/Pages/academico/aulas'
          }]
      },
      {
        description:'Administracion',
        link: '',
        child: true,
        childrens: [{
          descripction:'modulos',
          link:'/Pages/administracion/modulos'
        },
          {
            descripction:'Roles',
            link:'/Pages/administracion/roles'
          },
          {
            descripction:'Usuarios',
            link:'/Pages/administracion/usuarios'
          }]
      }
    ]
  }
}
