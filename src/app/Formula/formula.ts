import {Ingrediente} from '../Ingrediente/ingrediente';

export class Formula {
  id: number;
  nombre: string;
  L: number;
  a: number;
  b: number;
  version: string;
  estado: string;
  fechaCreacion: Date;
  nombreCustomer: string;
  nombreVendedor: string;
  ingredientes: Ingrediente[];

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.L = 0;
    this.a = 0;
    this.b = 0;
    this.version = '';
    this.estado = '';
    this.estado = '';
    this.fechaCreacion = new Date();
    this.nombreCustomer = '';
    this.nombreVendedor = '';
    this.ingredientes = [];
  }
}
