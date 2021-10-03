import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";



export const dashboardRoutes: Routes = [

    {path:'home', component: HomeComponent},
    {path: 'usuariolistado',loadChildren: () => import('../../components/administrativo.module').then(m => m.AdministrativoModule)},  
   

    ];