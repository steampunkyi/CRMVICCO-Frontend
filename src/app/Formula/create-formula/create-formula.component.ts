import { Component } from '@angular/core';
import { Formula } from '../formula';
import { FormulaService } from '../formula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-formula',
  standalone: false,
  templateUrl: './create-formula.component.html',
  styleUrls: ['./create-formula.component.css']
})
export class CreateFormulaComponent {
  formula: Formula = new Formula();

  constructor(private formulaService: FormulaService, private router: Router) {}

  onSubmit() {
    this.insertFormula();
  }

  insertFormula() {
    this.formulaService.createFormula(this.formula).subscribe(data => {
      console.log(data);
      this.goToFormulaList();
    });
  }

  goToFormulaList() {
    this.router.navigate(['/formulas']);
  }
}
