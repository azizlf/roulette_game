import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundpageComponent } from './notfoundpage.component';

const routes: Routes = [

  {
    path:"",
    component:NotfoundpageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundpageRoutingModule { }
