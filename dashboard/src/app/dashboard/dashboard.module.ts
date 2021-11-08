import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [HomeComponent, DetailComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
