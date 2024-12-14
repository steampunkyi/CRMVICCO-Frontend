import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formula } from '../formula';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-list-formula',
  standalone: false,
  templateUrl: './list-formula.component.html',
  styleUrls: ['./list-formula.component.css']
})
export class ListFormulaComponent implements OnInit {
  formulas: Formula[] = [];

  constructor(
    private formulaService: FormulaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFormulas();
  }

  private getFormulas() {
    this.formulaService.getFormulas().subscribe(data => {
      this.formulas = data;
    });
  }

  updateFormula(id: number) {
    this.router.navigate(['formulas/update-formula', id]);
  }

  viewFormula(id: number) {
    this.router.navigate(['formulas/formula-details', id]);
  }

  deleteFormula(id: number) {
    this.formulaService.deleteFormula(id).subscribe(data => {
      console.log(data);
      this.getFormulas();
    });
  }
}
