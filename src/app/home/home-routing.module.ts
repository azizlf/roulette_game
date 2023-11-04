import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [

  {
    path:"",
    component:HomeComponent,
    children:[

      {
        path:"history",
        loadChildren: () => import('../player-history/player-history.module').then(m => m.PlayerHistoryModule),
      },
      {
        path:"tiket/:id",
        loadChildren: () => import('../player-tiket/player-tiket.module').then(m => m.PlayerTiketModule),
      }

    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
