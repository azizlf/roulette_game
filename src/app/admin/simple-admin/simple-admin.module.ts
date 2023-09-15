import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleAdminRoutingModule } from './simple-admin-routing.module';
import { SimpleAdminComponent } from './simple-admin.component';


@NgModule({
  declarations: [
    SimpleAdminComponent,
  ],
  imports: [
    CommonModule,
    SimpleAdminRoutingModule
  ]
})
export class SimpleAdminModule { }
