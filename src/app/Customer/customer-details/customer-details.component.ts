import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-details',
  standalone: false,

  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

    id: number = 0;
    customer: Customer = new Customer();
    constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.customerService.getCustomerById(this.id).subscribe(data => {
            this.customer = data;
        });
    }

  goBack() {
    this.router.navigate(['/customers']);
  }
}
