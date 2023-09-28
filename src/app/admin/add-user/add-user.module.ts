import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserRoutingModule } from './add-user-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddUserModule { }