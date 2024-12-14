import { Vendedor } from './vendedor';
import { Customer } from '../Customer/customer';

describe('Vendedor', () => {
  it('should create an instance', () => {
    expect(new Vendedor()).toBeTruthy();
  });

  it('should have default values', () => {
    const vendedor = new Vendedor();
    expect(vendedor.id).toBe(0);
    expect(vendedor.nombre).toBe('');
    expect(vendedor.customers).toEqual([]);
  });

  it('should allow setting values through constructor', () => {
    const customers: Customer[] = [new Customer(), new Customer()];
    const vendedor = new Vendedor();
    vendedor.id = 1;
    vendedor.nombre = 'John Doe';
    vendedor.customers = customers;

    expect(vendedor.id).toBe(1);
    expect(vendedor.nombre).toBe('John Doe');
    expect(vendedor.customers).toBe(customers);
  });
});
