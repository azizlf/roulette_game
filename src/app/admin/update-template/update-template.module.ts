import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTemplateRoutingModule } from './update-template-routing.module';
import { UpdateTemplateComponent } from './update-template.component';


@NgModule({
  declarations: [UpdateTemplateComponent],
  imports: [
    CommonModule,
    UpdateTemplateRoutingModule
  ]
})
export class UpdateTemplateModule { }
