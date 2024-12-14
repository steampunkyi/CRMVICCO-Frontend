import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './Customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './Customer/customer.component';
import { CreateIngredienteComponent } from './Ingrediente/create-ingrediente/create-ingrediente.component';
import { CustomerDetailsComponent } from './Customer/customer-details/customer-details.component';
import { ListIngredienteComponent } from './Ingrediente/list-ingrediente/list-ingrediente.component';
import { UpdateIngredienteComponent } from './Ingrediente/update-ingrediente/update-ingrediente.component';
import { IngredienteComponent } from './Ingrediente/ingrediente.component';
import { IngredienteDetailsComponent } from './Ingrediente/ingrediente-details/ingrediente-details.component';
import {ProveedorComponent} from './Proveedor/proveedor.component';
import {CreateProveedorComponent} from './Proveedor/create-proveedor/create-proveedor.component';
import {ListProveedorComponent} from './Proveedor/list-proveedor/list-proveedor.component';
import {ProveedorDetailsComponent} from './Proveedor/proveedor-details/proveedor-details.component';
import {UpdateProveedorComponent} from './Proveedor/update-proveedor/update-proveedor.component';
import { ListFormulaComponent } from './Formula/list-formula/list-formula.component';
import { FormulaDetailsComponent } from './Formula/formula-details/formula-details.component';
import { UpdateFormulaComponent } from './Formula/update-formula/update-formula.component';
import {FormulaComponent} from './Formula/formula.component';
import {CreateFormulaComponent} from './Formula/create-formula/create-formula.component';
import { ListReportComponent } from './Report/list-report/list-report.component';
import { ReportDetailComponent } from './Report/report-detail/report-detail.component';
import { ReportComponent } from './Report/report/report.component';
import {ReportService} from './Report/report.service';
import { VendedorListComponent } from './Vendedor/vendedor-list/vendedor-list.component';
import { VendedorDetailComponent } from './Vendedor/vendedor-detail/vendedor-detail.component';
import { VendedorComponent } from './Vendedor/vendedor/vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CreateIngredienteComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    IngredienteComponent,
    IngredienteDetailsComponent,
    ListIngredienteComponent,
    UpdateIngredienteComponent,
    ProveedorComponent,
    CreateProveedorComponent,
    ListProveedorComponent,
    ProveedorDetailsComponent,
    UpdateProveedorComponent,
    ListFormulaComponent,
    FormulaDetailsComponent,
    UpdateFormulaComponent,
    FormulaComponent,
    CreateFormulaComponent,
    ListReportComponent,
    ReportDetailComponent,
    ReportComponent,
    VendedorListComponent,
    VendedorDetailComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
