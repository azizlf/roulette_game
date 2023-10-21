import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';

const routes: Routes = [

  {
    path:"",
    component:ManagementComponent,
    children:[
      {
        path:"users",
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
      },
      {
        path:"users/:adminId",
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
      },
      {
        path:"user/history/:userId",
        loadChildren: () => import('../user-history/user-history.module').then(m => m.UserHistoryModule),
      },
      {
        path:"settings",
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule),
      },
      {
        path:"admins",
        loadChildren: () => import('../admins/admins.module').then(m => m.AdminsModule),
      },
      {
        path:"add-admin",
        loadChildren: () => import('../add-admin/add-admin.module').then(m => m.AddAdminModule),
      },
      {
        path:"add-client",
        loadChildren: () => import('../add-user/add-user.module').then(m => m.AddUserModule),
      },
      {
        path:"update-client/:userId",
        loadChildren: () => import('../update-user/update-user.module').then(m => m.UpdateUserModule),
      },
      {
        path:"update-admin/:adminId",
        loadChildren: () => import('../update-admin/update-admin.module').then(m => m.UpdateAdminModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
