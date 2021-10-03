import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioVerComponent } from './usuario-ver/usuario-ver.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



const routes: Routes = [
  {
    path: '', component: UsuariosComponent,
  }, 
  {
     path: 'usuarioregistro/:id', component: UsuarioRegistroComponent
  },
  {
    path: 'usuariover/:id', component: UsuarioVerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class usuarioRoutingModule { }