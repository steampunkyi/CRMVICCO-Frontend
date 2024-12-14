import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formula } from './formula';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {
  private baseUrl = 'http://localhost:8080/api/formulas';

  constructor(private http: HttpClient) {}

  getFormulas(): Observable<Formula[]> {
    return this.http.get<Formula[]>(`${this.baseUrl}`);
  }

  createFormula(formula: Formula): Observable<Object> {
    return this.http.post(`${this.baseUrl}/insert`, formula);
  }

  getFormulaById(id: number): Observable<Formula> {
    return this.http.get<Formula>(`${this.baseUrl}/${id}`);
  }

  updateFormula(id: number, formula: Formula): Observable<Formula> {
    return this.http.put<Formula>(`${this.baseUrl}/${id}`, formula);
  }

  deleteFormula(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
