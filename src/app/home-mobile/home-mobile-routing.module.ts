import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMobileComponent } from './home-mobile.component';

const routes: Routes = [

  {
    path:"",
    component:HomeMobileComponent,
    children:[

      {
        path:"history",
        loadChildren: () => import('../player-history/player-history.module').then(m => m.PlayerHistoryModule),
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeMobileRoutingModule { }
