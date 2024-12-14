import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListProveedorComponent } from './list-proveedor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListProveedorComponent', () => {
  let component: ListProveedorComponent;
  let fixture: ComponentFixture<ListProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
