import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerAuthComponent } from './player-auth.component';

const routes: Routes = [

  {
    path:"",
    component:PlayerAuthComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerAuthRoutingModule { }
