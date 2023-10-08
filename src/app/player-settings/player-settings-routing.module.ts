import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSettingsComponent } from './player-settings.component';

const routes: Routes = [

  {
    path:"",
    component:PlayerSettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerSettingsRoutingModule { }
