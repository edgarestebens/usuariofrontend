import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { usuarioRoutingModule } from './usuario.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioVerComponent } from './usuario-ver/usuario-ver.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioRegistroComponent,
    UsuarioVerComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule,
    usuarioRoutingModule
  ]
})
export class AdministrativoModule { }
