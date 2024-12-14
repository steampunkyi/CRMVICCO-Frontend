import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VendedorService } from './vendedor.service';
import { Vendedor } from './vendedor';

describe('VendedorService', () => {
  let service: VendedorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VendedorService]
    });
    service = TestBed.inject(VendedorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve vendedores from the API via GET', () => {
    const dummyVendedores: Vendedor[] = [
      { id: 1, nombre: 'John Doe', customers: [] },
      { id: 2, nombre: 'Jane Doe', customers: [] }
    ];

    service.getVendedores().subscribe(vendedores => {
      expect(vendedores.length).toBe(2);
      expect(vendedores).toEqual(dummyVendedores);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyVendedores);
  });

  it('should retrieve a vendedor by ID from the API via GET', () => {
    const dummyVendedor: Vendedor = { id: 1, nombre: 'John Doe', customers: [] };

    service.getVendedorById(1).subscribe(vendedor => {
      expect(vendedor).toEqual(dummyVendedor);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyVendedor);
  });

  it('should create a new vendedor via POST', () => {
    const newVendedor: Vendedor = { id: 3, nombre: 'New Vendedor', customers: [] };

    service.createVendedor(newVendedor).subscribe(vendedor => {
      expect(vendedor).toEqual(newVendedor);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}`);
    expect(request.request.method).toBe('POST');
    request.flush(newVendedor);
  });

  it('should update an existing vendedor via PUT', () => {
    const updatedVendedor: Vendedor = { id: 1, nombre: 'Updated Vendedor', customers: [] };

    service.updateVendedor(1, updatedVendedor).subscribe(vendedor => {
      expect(vendedor).toEqual(updatedVendedor);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(request.request.method).toBe('PUT');
    request.flush(updatedVendedor);
  });

  it('should delete a vendedor via DELETE', () => {
    service.deleteVendedor(1).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const request = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
