import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-proveedor',
  standalone: false,
  templateUrl: './list-proveedor.component.html',
  styleUrls: ['./list-proveedor.component.css']
})
export class ListProveedorComponent implements OnInit {
  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  private getProveedores() {
    this.proveedorService.getProveedorList().subscribe(data => {
      this.proveedores = data;
    }, error => console.log(error));
  }

  updateProveedor(id: number) {
    this.router.navigate(['proveedores/update-proveedor', id]);
  }

  deleteProveedor(id: number) {
    this.proveedorService.deleteProveedor(id).subscribe(data => {
      this.getProveedores();
    }, error => console.log(error));
  }

  viewProveedor(id: number) {
    this.router.navigate(['proveedores/proveedor-details', id]);
  }
}
