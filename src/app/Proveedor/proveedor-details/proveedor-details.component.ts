import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-details',
  standalone: false,
  templateUrl: './proveedor-details.component.html',
  styleUrls: ['./proveedor-details.component.css']
})
export class ProveedorDetailsComponent {
  id: number = 0;
  proveedor: Proveedor = new Proveedor();

  constructor(private route: ActivatedRoute, private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedorService.getProveedorById(this.id).subscribe(data => {
      this.proveedor = data;
    });
  }

  goBack() {
    this.router.navigate(['/proveedores']);
  }
}
