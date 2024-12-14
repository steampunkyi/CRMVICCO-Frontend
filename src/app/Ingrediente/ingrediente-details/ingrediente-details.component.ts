import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-ingrediente-details',
  standalone: false,
  templateUrl: './ingrediente-details.component.html',
  styleUrls: ['./ingrediente-details.component.css']
})
export class IngredienteDetailsComponent {
  id: number = 0;
  ingrediente: Ingrediente = new Ingrediente();

  constructor(private route: ActivatedRoute, private ingredienteService: IngredienteService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ingredienteService.getIngredienteById(this.id).subscribe(data => {
      this.ingrediente = data;
    });
  }

  goBack() {
    this.router.navigate(['/ingredientes']);
  }
}
