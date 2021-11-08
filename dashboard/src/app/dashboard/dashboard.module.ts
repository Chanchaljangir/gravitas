import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { dashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    dashboardRoutingModule
  ]
})
export class DashboardModule { }
