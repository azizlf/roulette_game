import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateTemplateComponent } from './form-update-template.component';

const routes: Routes = [

  {
    path:"",
    component:FormUpdateTemplateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormUpdateTemplateRoutingModule { }
