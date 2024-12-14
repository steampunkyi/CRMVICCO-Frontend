import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../formula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Formula } from '../formula';

@Component({
  selector: 'app-update-formula',
  standalone: false,
  templateUrl: './update-formula.component.html',
  styleUrls: ['./update-formula.component.css']
})
export class UpdateFormulaComponent implements OnInit {
  id: number = 0;
  formula: Formula = new Formula();

  constructor(private formulaService: FormulaService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.formulaService.getFormulaById(this.id).subscribe(data => {
      this.formula = data;
    });
  }

  onSubmit() {
    this.formulaService.updateFormula(this.id, this.formula).subscribe(data => {
      this.formula = data;
      this.goToFormulaList();
    });
  }

  goToFormulaList() {
    this.router.navigate(['/formulas']);
  }
}
