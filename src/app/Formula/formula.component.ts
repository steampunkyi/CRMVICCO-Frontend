import {Component, OnInit} from '@angular/core';
import {Formula} from './formula';
import {FormulaService} from './formula.service';

@Component({
  selector: 'app-formula',
  standalone: false,
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
//export class FormulaComponent {
  //title = 'Formula Management';

export class FormulaComponent implements OnInit {
  title = 'Formula Management';
  formulas: Formula[] = [];

  constructor(private formulaService: FormulaService) { }

  ngOnInit(): void {
    this.formulaService.getFormulas().subscribe((data: Formula[]) => {
      this.formulas = data;
    }, error => {
      console.error('Error fetching formulas:', error);
    });
  }

}
