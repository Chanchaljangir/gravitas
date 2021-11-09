import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

 
  getAllChartData() {
    return this.http.get<any>(environment.baseURL + 'chartdata')
  }
  // getAllChartData(search, sort) {
  //   return this.http.get<any>(environment.baseURL + 'students?search='+search + "&sort=" + sort)
  // }

  getSpecificStudent(chartId) {
    return this.http.get<any>(environment.baseURL + 'specificData/' + chartId)
  }
}