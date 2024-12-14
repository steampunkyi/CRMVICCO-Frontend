import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit {
  id:number = 0;
  customer:Customer = new Customer();

  constructor(private customerService:CustomerService, private route:ActivatedRoute, private router:Router) {
  }
  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    })
  }

  onSubmit(){
    this.customerService.updateCustomer(this.id, this.customer).subscribe(data => {
      this.customer = data;
      this.goToCustomerList();
    })
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }
}
