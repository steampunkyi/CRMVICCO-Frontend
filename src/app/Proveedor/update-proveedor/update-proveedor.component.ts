import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-update-proveedor',
  standalone: false,
  templateUrl: './update-proveedor.component.html',
  styleUrls: ['./update-proveedor.component.css']
})
export class UpdateProveedorComponent implements OnInit {
  id: number = 0;
  proveedor: Proveedor = new Proveedor();

  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedorService.getProveedorById(this.id).subscribe(data => {
      this.proveedor = data;
    });
  }

  onSubmit() {
    this.proveedorService.updateProveedor(this.id, this.proveedor).subscribe(data => {
      this.goToProveedorList();
    });
  }

  goToProveedorList() {
    this.router.navigate(['/proveedores']);
  }
}
