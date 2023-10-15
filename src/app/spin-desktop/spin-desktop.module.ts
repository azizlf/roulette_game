import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinDesktopRoutingModule } from './spin-desktop-routing.module';
import { SpinDesktopComponent } from './spin-desktop.component';
import { SpinViewerComponent } from '../spin-viewer/spin-viewer.component';
import { SpinWheelComponent } from '../spin-wheel/spin-wheel.component';


@NgModule({
  declarations: [
    SpinDesktopComponent,
    SpinWheelComponent,
    SpinViewerComponent
  ],
  imports: [
    CommonModule,
    SpinDesktopRoutingModule
  ]
})
export class SpinDesktopModule { }
