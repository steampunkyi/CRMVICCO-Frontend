import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormulaService } from './formula.service';
import { Formula } from './formula';

describe('FormulaService', () => {
  let service: FormulaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormulaService]
    });
    service = TestBed.inject(FormulaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve formulas from the API via GET', () => {
    const dummyFormulas: Formula[] = [
      { id: 1, nombre: 'Formula 1', L: 50, a: 25, b: 75, version: '1.0', estado: 'activo', nombreCustomer: 'Cliente 1' },
      { id: 2, nombre: 'Formula 2', L: 60, a: 35, b: 85, version: '1.1', estado: 'inactivo', nombreCustomer: 'Cliente 2' }
    ];

    service.getFormulas().subscribe(formulas => {
      expect(formulas.length).toBe(2);
      expect(formulas).toEqual(dummyFormulas);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyFormulas);
  });

  it('should add a new formula via POST', () => {
    const newFormula: Formula = { id: 3, nombre: 'Formula 3', L: 70, a: 45, b: 95, version: '1.2', estado: 'activo', nombreCustomer: 'Cliente 3' };

    service.createFormula(newFormula).subscribe(formula => {
      expect(formula).toEqual(newFormula);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}/insert`);
    expect(request.request.method).toBe('POST');
    request.flush(newFormula);
  });

  it('should update an existing formula via PUT', () => {
    const updatedFormula: Formula = { id: 1, nombre: 'Updated Formula', L: 55, a: 30, b: 80, version: '1.1', estado: 'activo', nombreCustomer: 'Cliente 1' };

    service.updateFormula(updatedFormula.id, updatedFormula).subscribe(formula => {
      expect(formula).toEqual(updatedFormula);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(request.request.method).toBe('PUT');
    request.flush(updatedFormula);
  });

  it('should delete a formula via DELETE', () => {
    const formulaId = 1;

    service.deleteFormula(formulaId).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const request = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
