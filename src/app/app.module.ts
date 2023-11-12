import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperAdminComponent } from './admin/super-admin/super-admin.component';
import { SimpleAdminComponent } from './admin/simple-admin/simple-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployerTasksComponent } from './app-content/employer-tasks/employer-tasks.component';
import { AddEmployerComponent } from './app-content/add-employer/add-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployerTasksComponent,
    AddEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}