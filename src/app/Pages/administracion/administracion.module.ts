import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrudModulosComponent } from './modulos/components/crud-modulos/crud-modulos.component';
import { ListarModulosComponent } from './modulos/components/listar-modulos/listar-modulos.component';
import { CrudRolesComponent } from './roles/components/crud-roles/crud-roles.component';
import { ListarRolesComponent } from './roles/components/listar-roles/listar-roles.component';
import { CrudUsuariosComponent } from './usuarios/components/crud-usuarios/crud-usuarios.component';
import { ListarUsuariosComponent } from './usuarios/components/listar-usuarios/listar-usuarios.component';


@NgModule({
  declarations: [ModulosComponent, RolesComponent, UsuariosComponent, CrudModulosComponent, ListarModulosComponent, CrudRolesComponent, ListarRolesComponent, CrudUsuariosComponent, ListarUsuariosComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
