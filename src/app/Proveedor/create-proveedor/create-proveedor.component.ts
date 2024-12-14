import { Component } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proveedor',
  standalone: false,
  templateUrl: './create-proveedor.component.html',
  styleUrls: ['./create-proveedor.component.css']
})
export class CreateProveedorComponent {
  title: string = 'Crear Proveedor';
  proveedor: Proveedor = new Proveedor();

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  onSubmit() {
    this.insertProveedor();
    console.log(this.proveedor);
    this.goToProveedorList();
  }

  insertProveedor() {
    this.proveedorService.createProveedor(this.proveedor).subscribe(data => {
      console.log(data);
    });
  }

  goToProveedorList() {
    this.router.navigate(['/proveedores']);
  }
}
