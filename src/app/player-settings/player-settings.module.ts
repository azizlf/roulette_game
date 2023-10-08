import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerSettingsRoutingModule } from './player-settings-routing.module';
import { PlayerSettingsComponent } from './player-settings.component';


@NgModule({
  declarations: [PlayerSettingsComponent],
  imports: [
    CommonModule,
    PlayerSettingsRoutingModule
  ]
})
export class PlayerSettingsModule { }
