import { Customer } from '../Customer/customer';

export class Vendedor {
  id: number;
  nombre: string;
  customers: Customer[];
  formulas: string[];

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.customers = [];
    this.formulas = [];
  }
}
