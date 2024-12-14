import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './Customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './Customer/customer-details/customer-details.component';
import { CustomerComponent } from './Customer/customer.component';
import { ListIngredienteComponent } from './Ingrediente/list-ingrediente/list-ingrediente.component';
import { CreateIngredienteComponent } from './Ingrediente/create-ingrediente/create-ingrediente.component';
import { UpdateIngredienteComponent } from './Ingrediente/update-ingrediente/update-ingrediente.component';
import { IngredienteDetailsComponent } from './Ingrediente/ingrediente-details/ingrediente-details.component';
import { IngredienteComponent } from './Ingrediente/ingrediente.component';
import { ListProveedorComponent } from './Proveedor/list-proveedor/list-proveedor.component';
import { CreateProveedorComponent } from './Proveedor/create-proveedor/create-proveedor.component';
import { UpdateProveedorComponent } from './Proveedor/update-proveedor/update-proveedor.component';
import { ProveedorDetailsComponent } from './Proveedor/proveedor-details/proveedor-details.component';
import { ProveedorComponent } from './Proveedor/proveedor.component';
import { ListFormulaComponent } from './Formula/list-formula/list-formula.component';
import { CreateFormulaComponent } from './Formula/create-formula/create-formula.component';
import { UpdateFormulaComponent } from './Formula/update-formula/update-formula.component';
import { FormulaDetailsComponent } from './Formula/formula-details/formula-details.component';
import { FormulaComponent } from './Formula/formula.component';
import {ListReportComponent} from './Report/list-report/list-report.component';
import {ReportDetailComponent} from './Report/report-detail/report-detail.component';
import {ReportComponent} from './Report/report/report.component';
import {VendedorComponent} from './Vendedor/vendedor/vendedor.component';
import {VendedorListComponent} from './Vendedor/vendedor-list/vendedor-list.component';
import {VendedorDetailComponent} from './Vendedor/vendedor-detail/vendedor-detail.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent, children: [
      { path: '', component: ListCustomerComponent },
      { path: 'create-customer', component: CreateCustomerComponent },
      { path: 'update-customer/:id', component: UpdateCustomerComponent },
      { path: 'customer-details/:id', component: CustomerDetailsComponent }
    ]},
  { path: 'ingredientes', component: IngredienteComponent, children: [
      { path: '', component: ListIngredienteComponent },
      { path: 'create-ingrediente', component: CreateIngredienteComponent },
      { path: 'update-ingrediente/:id', component: UpdateIngredienteComponent },
      { path: 'ingrediente-details/:id', component: IngredienteDetailsComponent }
    ]},
  { path: 'proveedores', component: ProveedorComponent, children: [
      { path: '', component: ListProveedorComponent },
      { path: 'create-proveedor', component: CreateProveedorComponent },
      { path: 'update-proveedor/:id', component: UpdateProveedorComponent },
      { path: 'proveedor-details/:id', component: ProveedorDetailsComponent }
    ]},
  { path: 'formulas', component: FormulaComponent, children: [
      { path: '', component: ListFormulaComponent },
      { path: 'create-formula', component: CreateFormulaComponent },
      { path: 'update-formula/:id', component: UpdateFormulaComponent },
      { path: 'formula-details/:id', component: FormulaDetailsComponent }
    ]},
  { path: 'reports', component: ReportComponent, children: [
      { path: '', component: ListReportComponent },
      { path: 'report/:id', component: ReportDetailComponent }
    ]},

  { path: 'vendedores', component: VendedorComponent, children: [
      { path: '', component: VendedorListComponent },
      { path: ':id', component: VendedorDetailComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
