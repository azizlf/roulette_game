import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinDesktopComponent } from './spin-desktop.component';

const routes: Routes = [

  {
    path:"",
    component:SpinDesktopComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinDesktopRoutingModule { }
