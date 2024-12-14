import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private baseURL = "http://localhost:8080/api/proveedores";

  constructor(private httpClient: HttpClient) { }

  getProveedorList(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(`${this.baseURL}`);
  }

  createProveedor(proveedor: Proveedor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/insert`, proveedor);
  }

  getProveedorById(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(`${this.baseURL}/${id}`);
  }

  updateProveedor(id: number, proveedor: Proveedor): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, proveedor);
  }

  deleteProveedor(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
