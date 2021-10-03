import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

  public registrarusuarioForm!: FormGroup;
  public title!: string;
  public id!: string;

  constructor(private fb: FormBuilder,
              private location: Location,
              private route: ActivatedRoute,
              private alarma: SweetAlertService,
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarformulario();
    this.cargardatos();
  }

  cargarformulario(){
    this.registrarusuarioForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      activo: ['', Validators.required],
      
    });
  }

  cargardatos(){
    this.id = this.route.snapshot.params['id'];

    if(this.id !="0"){
      this.title="Actualizar Usuario";

      this.usuarioService.consultaUsuario(this.id)
        .subscribe((resp: any) =>{

            this.registrarusuarioForm.controls["nombres"].setValue(resp.nombres);
            this.registrarusuarioForm.controls["apellidos"].setValue(resp.apellidos);
            this.registrarusuarioForm.controls["email"].setValue(resp.email);
            this.registrarusuarioForm.controls["usuario"].setValue(resp.usuario);
            this.registrarusuarioForm.controls["activo"].setValue(resp.activo);

        })

    }else{
      this.title="Registrar Usuario";
    }


  }

  guardar(){

    
    if(this.registrarusuarioForm.valid)
    {

      const{email,nombres,apellidos,usuario,activo} = this.registrarusuarioForm.value;

      if(this.id !="0"){
        
        try {
          this.usuarioService.modificarUsuarios(this.id,{usuario,email,nombres,apellidos,activo})
            .subscribe(resp =>{
              this.alarma.showSuccess("Usuario Modificado exitosamente");
              this.goBack();
            })
        } catch (error) {
            this.alarma.showError(`Surgio un error ${error}`);
        }
      }
      else{ 

        try {
          this.usuarioService.CrearUsuario({usuario,email,nombres,apellidos,activo})
            .subscribe(resp =>{
              this.alarma.showSuccess("Usuario Creado exitosamente");
              this.goBack();
            })
        } catch (error) {
          this.alarma.showError(`Surgio un error ${error}`);
        }

        
      }
    }
    else{
      this.alarma.showWarning("Información incompleta, por favor verifique");
    }

  }

  goBack(): void{
		this.location.back();
  }


}
