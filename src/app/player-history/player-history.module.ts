import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerHistoryRoutingModule } from './player-history-routing.module';
import { PlayerHistoryComponent } from './player-history.component';


@NgModule({
  declarations: [PlayerHistoryComponent],
  imports: [
    CommonModule,
    PlayerHistoryRoutingModule
  ]
})
export class PlayerHistoryModule { }
