import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMobileRoutingModule } from './home-mobile-routing.module';
import { HomeMobileComponent } from './home-mobile.component';
import { SpinMobileComponent } from '../spin-mobile/spin-mobile.component';


@NgModule({
  declarations: [HomeMobileComponent,SpinMobileComponent],
  imports: [
    CommonModule,
    HomeMobileRoutingModule
  ]
})
export class HomeMobileModule { }
