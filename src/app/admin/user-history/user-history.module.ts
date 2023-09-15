import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryRoutingModule } from './user-history-routing.module';
import { UserHistoryComponent } from './user-history.component';

@NgModule({
  declarations: [
    UserHistoryComponent
  ],
  imports: [
    CommonModule,
    UserHistoryRoutingModule
  ]
})
export class UserHistoryModule { }
