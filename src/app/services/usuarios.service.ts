import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  consultaUsuario(id: string){

    return this.http.get(`http://localhost:4000/usuarios/${id}`);

  }
  consultarUsuarios(){
    return this.http.get('http://localhost:4000/usuarios');
  }

  CrearUsuario(data: any){

    return this.http.post('http://localhost:4000/usuarios', data);

  
  }

  modificarUsuarios(id: string,data:any){
    return this.http.put(`http://localhost:4000/usuarios/${id}`, data);

  }


}
