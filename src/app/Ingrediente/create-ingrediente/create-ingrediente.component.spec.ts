import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateIngredienteComponent } from './create-ingrediente.component';

describe('CreateIngredienteComponent', () => {
  let component: CreateIngredienteComponent;
  let fixture: ComponentFixture<CreateIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIngredienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
