import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerTiketRoutingModule } from './player-tiket-routing.module';
import { PlayerTiketComponent } from './player-tiket.component';


@NgModule({
  declarations: [PlayerTiketComponent],
  imports: [
    CommonModule,
    PlayerTiketRoutingModule
  ]
})
export class PlayerTiketModule { }
