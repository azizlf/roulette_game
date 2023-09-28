import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAdminRoutingModule } from './update-admin-routing.module';
import { UpdateAdminComponent } from './update-admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    UpdateAdminComponent

  ],
  imports: [
    CommonModule,
    UpdateAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UpdateAdminModule { }
