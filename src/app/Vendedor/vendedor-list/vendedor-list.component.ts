import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { Vendedor } from '../vendedor';

@Component({
  selector: 'app-vendedor-list',
  standalone: false,
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {
  vendedores: Vendedor[] = [];

  constructor(private vendedorService: VendedorService) {}

  ngOnInit(): void {
    this.getVendedores();
  }

  getVendedores(): void {
    this.vendedorService.getVendedores().subscribe(vendedores => {
      this.vendedores = vendedores;
    });
  }
}
