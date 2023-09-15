import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component'

const routes: Routes = [

  {
    path:"",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"management",
    component:ManagementComponent,
    children:[
      {
        path:"users",
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path:"users/:adminId",
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path:"user/history/:userId",
        loadChildren: () => import('./user-history/user-history.module').then(m => m.UserHistoryModule),
      },
      {
        path:"settings",
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
      },
      {
        path:"admins",
        loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule),
      }
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
