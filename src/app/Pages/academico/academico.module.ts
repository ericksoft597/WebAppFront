import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicoRoutingModule } from './academico-routing.module';
import { DocentesComponent } from './docentes/docentes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { MateriasComponent } from './materias/materias.component';
import { GradosComponent } from './grados/grados.component';
import { AulasComponent } from './aulas/aulas.component';


@NgModule({
  declarations: [DocentesComponent, EstudiantesComponent, MateriasComponent, GradosComponent, AulasComponent],
  imports: [
    CommonModule,
    AcademicoRoutingModule
  ]
})
export class AcademicoModule { }
