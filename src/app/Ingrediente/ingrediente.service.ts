// src/app/Ingrediente/ingrediente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  private baseURL = "http://localhost:8080/api/ingredientes";

  constructor(private httpClient: HttpClient) { }

  getIngredienteList(): Observable<Ingrediente[]> {
    return this.httpClient.get<Ingrediente[]>(`${this.baseURL}`);
  }

  createIngrediente(ingrediente: Ingrediente): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/insert`, ingrediente);
  }

  getIngredienteById(id: number): Observable<Ingrediente> {
    return this.httpClient.get<Ingrediente>(`${this.baseURL}/${id}`);
  }

  updateIngrediente(id: number, ingrediente: Ingrediente): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, ingrediente);
  }

  deleteIngrediente(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
