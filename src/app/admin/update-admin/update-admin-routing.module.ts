import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAdminComponent } from './update-admin.component';

const routes: Routes = [

  {
    path:"",
    component:UpdateAdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAdminRoutingModule { }
