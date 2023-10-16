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
    path:"home-mobile",
    loadChildren: () => import('./home-mobile/home-mobile.module').then(m => m.HomeMobileModule)
  },
  {
    path:"spin/desktop",
    loadChildren: () => import('./spin-wheel/spin-wheel.module').then(m => m.SpinWheelModule)
  },
  {
    path:"admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path:"settings",
    loadChildren: () => import('./player-settings/player-settings.module').then(m => m.PlayerSettingsModule),
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
