import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModulosComponent} from './modulos/modulos.component';
import {RolesComponent} from './roles/roles.component';
import {UsuariosComponent} from './usuarios/usuarios.component';


const routes: Routes = [
  {
    path: 'modulos',
    component:ModulosComponent
  },
{
  path: 'roles',
    component:RolesComponent
},
  {
    path: 'usuarios',
    component:UsuariosComponent}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
