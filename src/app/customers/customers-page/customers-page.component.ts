import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { Customer } from 'src/app/shared/interfaces/interfaces.component';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss'],
})
export class CustomersPageComponent implements OnInit {
  constructor(private api: ApiService, private auth: AuthService) {}

  title = 'Customers';
  icon = 'fa-solid fa-house-chimney-user text-success';
  customers: Array<Customer> = [];
  redirect = this.auth.redirectUrl;
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.api.getCustomers().subscribe({
      next: (data: Array<Customer>) => {
        this.customers = data;
      },
      error: (err) => console.log(err),
    });
  }
  myGenericDelete = (id: any): void => {
    //callback code here
    if (!id) {
      return;
    }
    this.api.deleteCustomer(id).subscribe({
      next: (data: Customer) => {
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  };

  refreshItems() {
    setTimeout(() => {
      this.getCustomers();
    }, 600);
  }
}

// this.api.getTasks().subscribe({
//   next: (data: Array<Task>) => {
//     this.tasks = data;
//   },
//   error: (err) => console.log(err),
// });
