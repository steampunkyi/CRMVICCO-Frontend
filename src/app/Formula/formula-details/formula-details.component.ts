import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formula } from '../formula';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-formula-details',
  standalone: false,
  templateUrl: './formula-details.component.html',
  styleUrls: ['./formula-details.component.css']
})
export class FormulaDetailsComponent implements OnInit {
  id: number = 0;
  formula: Formula = new Formula();

  constructor(private route: ActivatedRoute, private formulaService: FormulaService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.formulaService.getFormulaById(this.id).subscribe(data => {
      this.formula = data;
    });
  }

  goBack() {
    this.router.navigate(['/formulas']);
  }
}
