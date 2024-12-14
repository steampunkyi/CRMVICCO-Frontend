import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendedor } from './vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  private baseUrl = 'http://localhost:8080/api/vendedores';

  constructor(private http: HttpClient) {}

  getVendedores(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(`${this.baseUrl}`);
  }

  getVendedorById(id: number): Observable<Vendedor> {
    return this.http.get<Vendedor>(`${this.baseUrl}/${id}`);
  }

  createVendedor(vendedor: Vendedor): Observable<Vendedor> {
    return this.http.post<Vendedor>(`${this.baseUrl}`, vendedor);
  }

  updateVendedor(id: number, vendedor: Vendedor): Observable<Vendedor> {
    return this.http.put<Vendedor>(`${this.baseUrl}/${id}`, vendedor);
  }

  deleteVendedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
