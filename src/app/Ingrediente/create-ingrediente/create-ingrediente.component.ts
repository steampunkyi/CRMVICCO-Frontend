// src/app/Ingrediente/create-ingrediente/create-ingrediente.component.ts
import { Component } from '@angular/core';
import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ingrediente',
  standalone: false,
  templateUrl: './create-ingrediente.component.html',
  styleUrls: ['./create-ingrediente.component.css']
})
export class CreateIngredienteComponent {
  ingrediente: Ingrediente = new Ingrediente();

  constructor(private ingredienteService: IngredienteService, private router: Router) { }

  onSubmit() {
    this.insertIngrediente();
    console.log(this.ingrediente);
    this.goToIngredienteList();
  }

  insertIngrediente() {
    this.ingredienteService.createIngrediente(this.ingrediente).subscribe(data => {
      console.log(data);
    });
  }

  goToIngredienteList() {
    this.router.navigate(['/ingredientes']);
  }
}
