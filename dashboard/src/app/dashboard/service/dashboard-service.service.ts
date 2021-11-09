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

  registerStudent(obj) {
    return this.http.post<any>(environment.baseURL + 'student', obj)
  }

  getAllStudent(search, sort) {
    return this.http.get<any>(environment.baseURL + 'students?search='+search + "&sort=" + sort)
  }

  getSpecificStudent(stuId) {
    return this.http.get<any>(environment.baseURL + 'studentById/' + stuId)
  }
  deleteStudent(stuId) {
    return this.http.delete<any>(environment.baseURL + 'student/' + stuId)
  }
  updateStudent(stuId, obj) {
    return this.http.put<any>(environment.baseURL + 'student/' + stuId, obj)
  }
}