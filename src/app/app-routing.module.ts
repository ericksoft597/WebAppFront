import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {config} from 'rxjs';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {TemplateComponent} from './thema/template/template.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {path: 'Pages',
    component: TemplateComponent,
  children: [
    {
      path: 'biblioteca',
      loadChildren: './Pages/biblioteca/biblioteca.module#BibliotecaModule'
    },
    {
      path: 'academico',
      loadChildren: './Pages/academico/academico.module#AcademicoModule'
    },
    {
      path: 'administracion',
      loadChildren: './Pages/administracion/administracion.module#AdministracionModule'
    }
  ]},
  {path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
