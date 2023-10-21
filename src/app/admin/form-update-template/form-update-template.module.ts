import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormUpdateTemplateRoutingModule } from './form-update-template-routing.module';
import { FormUpdateTemplateComponent } from './form-update-template.component';


@NgModule({
  declarations: [FormUpdateTemplateComponent],
  imports: [
    CommonModule,
    FormUpdateTemplateRoutingModule
  ]
})
export class FormUpdateTemplateModule { }
