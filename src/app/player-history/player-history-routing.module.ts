import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerHistoryComponent } from './player-history.component';

const routes: Routes = [

  {
    path:"",
    component:PlayerHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerHistoryRoutingModule { }
