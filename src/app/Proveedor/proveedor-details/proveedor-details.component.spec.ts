import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProveedorDetailsComponent } from './proveedor-details.component';
import { ProveedorService } from '../proveedor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProveedorDetailsComponent', () => {
  let component: ProveedorDetailsComponent;
  let fixture: ComponentFixture<ProveedorDetailsComponent>;
  let proveedorService: ProveedorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProveedorDetailsComponent],
      providers: [
        ProveedorService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 1 } } }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorDetailsComponent);
    component = fixture.componentInstance;
    proveedorService = TestBed.inject(ProveedorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch proveedor details on init', () => {
    const proveedor = { id: 1, nombre: 'Proveedor 1', pais: 'Pais 1' };
    spyOn(proveedorService, 'getProveedorById').and.returnValue(of(proveedor));

    component.ngOnInit();

    expect(component.proveedor).toEqual(proveedor);
  });
});
