import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component'

const routes: Routes = [

  {
    path:"",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"management",
    loadChildren: () => import('./management/management.module').then(m => m.ManagementModule),
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
