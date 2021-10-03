import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario-ver',
  templateUrl: './usuario-ver.component.html',
  styleUrls: ['./usuario-ver.component.css']
})
export class UsuarioVerComponent implements OnInit {

  public registrarusuarioForm!: FormGroup;
  public id!: string;

  constructor(private fb: FormBuilder,
              private location: Location,
              private route: ActivatedRoute,
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarformulario();
    this.cargardatos();
  }

  cargarformulario(){
    this.registrarusuarioForm = this.fb.group({
      email: [''],
      nombres: [''],
      apellidos: [''],
      usuario: [''],
    });
  }

  cargardatos(){

    this.id = this.route.snapshot.params['id'];


      this.usuarioService.consultaUsuario(this.id)
        .subscribe((resp: any) =>{

            this.registrarusuarioForm.controls["nombres"].setValue(resp.nombres);
            this.registrarusuarioForm.controls["apellidos"].setValue(resp.apellidos);
            this.registrarusuarioForm.controls["email"].setValue(resp.email);
            this.registrarusuarioForm.controls["usuario"].setValue(resp.usuario);

        })

   

  }


  goBack(): void{
		this.location.back();
  }


}
