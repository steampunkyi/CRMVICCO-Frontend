import { Component } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  standalone: false,

  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) {
  }

  onSubmit() {
    this.insertCustomer();
    console.log(this.customer);
    this.goToCustomerList();
  }

  insertCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log(data);

    });
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

}
