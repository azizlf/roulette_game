import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsForSuperRoutingModule } from './admins-for-super-routing.module';
import { AdminsForSuperComponent } from './admins-for-super.component';


@NgModule({
  declarations: [AdminsForSuperComponent],
  imports: [
    CommonModule,
    AdminsForSuperRoutingModule
  ]
})
export class AdminsForSuperModule { }
