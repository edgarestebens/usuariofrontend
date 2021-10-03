import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit, OnDestroy {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger = new Subject();
  
  constructor(private usuariosservice: UsuariosService) { }

  public usuarios: any[] = [];

  ngOnInit(){

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language:{
          url:'//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    }

    this.consultarUsuarios();
  }


  consultarUsuarios(){
    this.usuariosservice.consultarUsuarios()
    .subscribe((resp: any) => {
       this.dtTrigger.next();
          this.usuarios = resp;
      console.log(resp);
    })
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }


}
