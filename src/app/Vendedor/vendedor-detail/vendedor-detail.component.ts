import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location, UpperCasePipe} from '@angular/common';
import { VendedorService } from '../vendedor.service';
import { Vendedor } from '../vendedor';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-vendedor-detail',
  standalone: false,
  templateUrl: './vendedor-detail.component.html',
  styleUrls: ['./vendedor-detail.component.css']
})
export class VendedorDetailComponent implements OnInit {
  @Input() vendedor?: Vendedor;

  constructor(
    private route: ActivatedRoute,
    private vendedorService: VendedorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVendedor();
  }

  getVendedor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vendedorService.getVendedorById(id).subscribe(vendedor => this.vendedor = vendedor);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.vendedor) {
      this.vendedorService.updateVendedor(this.vendedor.id, this.vendedor)
        .subscribe(() => this.goBack());
    }
  }
}
