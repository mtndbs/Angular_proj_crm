import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from 'src/app/shared/interfaces/interfaces.component';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  title = 'Employees';
  icon = 'fa-solid fa-user-tie';
  searchText: any;

  searchForm = new FormGroup({
    employee: new FormControl('', {}),
  });

  searchEmp: Array<Employee> = [];

  employees: Array<Employee> = [];

  constructor(private api: ApiService) {}

  callNumber(number: any) {
    window.location.href = `tel:${number}`;
  }
  sendWhatApp(number: any) {
    const num = number.replace(/^0|\D/g, '');
    window.location.href = `https://wa.me/972${num}`;
  }

  ngOnInit(): void {
    this.getEmployees();
    setTimeout(() => {
      this.searchEmp = this.employees;
    }, 100);
  }

  myGenericDelete = (id: any): void => {
    //callback code here
    if (!id) {
      return;
    }
    this.api.deleteEmployee(id).subscribe({
      next: (data: Employee) => {
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  };

  getEmployees() {
    this.api.getEmployees().subscribe({
      next: (data: Array<Employee>) => {
        this.employees = data;
        this.searchEmp = this.employees;
      },

      error: (err) => console.log(err),
    });
  }
  refreshItems() {
    this.getEmployees();
    console.log('refresh');
    setTimeout(() => {
      this.searchEmp = this.employees;
    }, 1000);
  }

  searchFunc() {
    let value = this.searchForm.getRawValue();

    this.searchEmp = this.employees.filter((item: any) => {
      // console.log(item.name);
      console.log(value.employee);
      if (
        item.name.trim().includes(value.employee) ||
        item.email.trim().includes(value.employee)
      ) {
        console.log(this.searchEmp);
        return item;
      }
    });
  }
}
