import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { IngredienteDetailsComponent } from './ingrediente-details.component';
import { IngredienteService } from '../ingrediente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IngredienteDetailsComponent', () => {
  let component: IngredienteDetailsComponent;
  let fixture: ComponentFixture<IngredienteDetailsComponent>;
  let ingredienteService: IngredienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [IngredienteDetailsComponent],
      providers: [
        IngredienteService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 1 } } }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteDetailsComponent);
    component = fixture.componentInstance;
    ingredienteService = TestBed.inject(IngredienteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch ingrediente details on init', () => {
    const ingrediente = { id: 1, nombre: 'Tomato', precioPorKg: 2.5, proveedorId: 1 };
    spyOn(ingredienteService, 'getIngredienteById').and.returnValue(of(ingrediente));

    component.ngOnInit();

    expect(component.ingrediente).toEqual(ingrediente);
  });
});
