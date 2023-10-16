import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinWheelRoutingModule } from './spin-wheel-routing.module';
import { SpinWheelComponent } from './spin-wheel.component';


@NgModule({
  declarations: [SpinWheelComponent],
  imports: [
    CommonModule,
    SpinWheelRoutingModule
  ]
})
export class SpinWheelModule { }
