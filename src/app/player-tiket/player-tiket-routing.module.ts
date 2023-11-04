import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTiketComponent } from './player-tiket.component';

const routes: Routes = [

  {
    path:"",
    component:PlayerTiketComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerTiketRoutingModule { }
