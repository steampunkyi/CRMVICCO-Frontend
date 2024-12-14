export class Customer {

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobileNumber: string = '';
  formulas: string[];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.formulas = [];
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
