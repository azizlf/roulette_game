import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployerRoutingModule } from './add-employer-routing.module';
import { AddEmployerComponent } from './add-employer.component';


@NgModule({
  declarations: [
    AddEmployerComponent
  ],
  imports: [
    CommonModule,
    AddEmployerRoutingModule
  ]
})
export class AddEmployerModule { }
