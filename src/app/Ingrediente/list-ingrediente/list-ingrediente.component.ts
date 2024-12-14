import { Component, OnInit } from '@angular/core';
import { IngredienteService } from '../ingrediente.service';
import { Ingrediente } from '../ingrediente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ingrediente',
  standalone: false,
  templateUrl: './list-ingrediente.component.html',
  styleUrls: ['./list-ingrediente.component.css']
})
export class ListIngredienteComponent implements OnInit {
  ingredientes: Ingrediente[] = [];

  constructor(private ingredienteService: IngredienteService, private router: Router) { }

  ngOnInit(): void {
    this.getIngredientes();
  }

  private getIngredientes() {
    this.ingredienteService.getIngredienteList().subscribe(data => {
      this.ingredientes = data;
    }, error => console.log(error));
  }

  updateIngrediente(id: number) {
    this.router.navigate(['ingredientes/update-ingrediente', id]);
  }

  deleteIngrediente(id: number) {
    this.ingredienteService.deleteIngrediente(id).subscribe(data => {
      this.getIngredientes();
    }, error => console.log(error));
  }

  viewIngrediente(id: number) {
    this.router.navigate(['ingredientes/ingrediente-details', id]);
  }
}
