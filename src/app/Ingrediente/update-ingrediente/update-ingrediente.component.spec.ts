import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateIngredienteComponent } from './update-ingrediente.component';

describe('UpdateIngredienteComponent', () => {
  let component: UpdateIngredienteComponent;
  let fixture: ComponentFixture<UpdateIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateIngredienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
