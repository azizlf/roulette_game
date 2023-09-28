import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminRoutingModule } from './add-admin-routing.module';
import { AddAdminComponent } from './add-admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    AddAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddAdminModule { }
