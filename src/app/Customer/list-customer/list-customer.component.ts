import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  standalone: false,

  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers:Customer[] = [];

  constructor(private customerService:CustomerService, private router:Router) {}

  ngOnInit():void {
    this.getCustomers();
  }

  private getCustomers(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }

  updateCustomer(id:number){
    this.router.navigate(['customers/update-customer', id]);
  }

  viewCustomer(id:number){
    this.router.navigate(['customers/customer-details', id]);
  }

  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustomers();
    });
  }

}
