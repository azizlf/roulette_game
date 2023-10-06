import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAuthRoutingModule } from './player-auth-routing.module';
import { PlayerAuthComponent } from './player-auth.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    PlayerAuthComponent

  ],
  imports: [
    CommonModule,
    PlayerAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlayerAuthModule { }
