import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormulaService } from '../../Formula/formula.service';
import { Formula } from '../../Formula/formula';
import { Location } from '@angular/common';
import {ReportService} from '../report.service';

@Component({
  selector: 'app-report-detail',
  standalone: false,
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  formula: Formula | undefined;

  constructor(
    private route: ActivatedRoute,
    private formulaService: FormulaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFormula();
  }

  private getFormula(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formulaService.getFormulaById(id).subscribe((data: Formula) => {
      this.formula = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
