import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHistoryComponent } from './user-history.component';

const routes: Routes = [

  {
    path:"",
    component:UserHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHistoryRoutingModule { }
