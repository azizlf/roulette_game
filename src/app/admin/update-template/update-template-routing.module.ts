import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTemplateComponent } from './update-template.component';

const routes: Routes = [

  {
    path:"",
    component:UpdateTemplateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTemplateRoutingModule { }
