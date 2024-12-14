import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredienteService } from '../ingrediente.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-update-ingrediente',
  standalone: false,
  templateUrl: './update-ingrediente.component.html',
  styleUrls: ['./update-ingrediente.component.css']
})
export class UpdateIngredienteComponent implements OnInit {
  id: number = 0;
  ingrediente: Ingrediente = new Ingrediente();

  constructor(
    private ingredienteService: IngredienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ingredienteService.getIngredienteById(this.id).subscribe(data => {
      this.ingrediente = data;
    });
  }

  onSubmit() {
    this.ingredienteService.updateIngrediente(this.id, this.ingrediente).subscribe(data => {
      this.goToIngredienteList();
    });
  }

  goToIngredienteList() {
    this.router.navigate(['/ingredientes']);
  }
}
