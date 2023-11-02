import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsForSuperComponent } from './admins-for-super.component';

const routes: Routes = [

  { 
    path:"",
    component:AdminsForSuperComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsForSuperRoutingModule { }
