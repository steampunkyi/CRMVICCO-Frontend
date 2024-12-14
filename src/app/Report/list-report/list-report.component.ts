import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../../Formula/formula.service';
import { Formula } from '../../Formula/formula';
import {ReportService} from '../report.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-report',
  standalone: false,
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.css']
})
export class ListReportComponent implements OnInit {
  formulas: Formula[] = [];

  constructor(private formulaService: FormulaService, private router: Router) {}

  ngOnInit(): void {
    this.getFormulas();
  }

  private getFormulas(): void {
    this.formulaService.getFormulas().subscribe((data: Formula[]) => {
      this.formulas = data;
    });
  }

  viewReport(id: number): void {
    this.router.navigate(['reports', id]);
  }
}
