import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:"",
    loadChildren: () => import('./player-auth/player-auth.module').then(m => m.PlayerAuthModule)
  },
  {
    path:"home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:"admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path:"**",
    loadChildren: () => import('./notfoundpage/notfoundpage.module').then(m => m.NotfoundpageModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
