// src/app/Report/report.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'api/reports'; // URL de la API

  constructor(private http: HttpClient) { }

  getReports(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getReportById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
