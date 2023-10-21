import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleAdminComponent } from './simple-admin.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleAdminRoutingModule { }
