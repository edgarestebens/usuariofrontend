import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRoutes } from './components/dashboard/dashboard.routes';


const routes: Routes = [

  {
    path: '', 
    component: DashboardComponent,
    children: dashboardRoutes
  },
  
  // {path: '**', pathMatch: 'full', redirectTo: 'home'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
