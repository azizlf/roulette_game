import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SimpleAdminComponent } from '../simple-admin/simple-admin.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';
import { SAdminComponent } from '../s-admin/s-admin.component';


@NgModule({
  declarations: [
    ManagementComponent,
    SuperAdminComponent,
    SimpleAdminComponent,
    SAdminComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
