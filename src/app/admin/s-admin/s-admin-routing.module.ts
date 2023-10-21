import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAdminComponent } from './s-admin.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SAdminRoutingModule { }
