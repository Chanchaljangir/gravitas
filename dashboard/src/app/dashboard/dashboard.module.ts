import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
// import { GoogleChartsModule } from 'angular-google-charts';



@NgModule({
  declarations: [HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    dashboardRoutingModule,
    GoogleChartsModule
  ]
})
export class DashboardModule { }
