import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocentesComponent} from './docentes/docentes.component';
import {EstudiantesComponent} from './estudiantes/estudiantes.component';
import {MateriasComponent} from './materias/materias.component';
import {GradosComponent} from './grados/grados.component';
import {AulasComponent} from './aulas/aulas.component';


const routes: Routes = [
  {path: 'docentes',
    component:DocentesComponent
  },
  {path: 'estudiantes',
    component: EstudiantesComponent
  },
  {
    path: 'materias',
    component: MateriasComponent
  },
  {
    path: 'grados',
    component: GradosComponent
  },
  {
    path: 'aulas',
    component: AulasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicoRoutingModule { }
