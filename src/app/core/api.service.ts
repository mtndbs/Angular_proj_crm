import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Customer,
  Employee,
  User,
} from '../shared/interfaces/interfaces.component';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  TOKEN_KEY = 'token';
  serverUrl = 'http://localhost:3000/';
  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) || '';
    // return this.token
  }
  setToken(value: string) {
    localStorage.setItem(this.TOKEN_KEY, value);
    // this.token = value;
  }

  deleteToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setUserInfo(value: User | undefined) {
    const userStingfy = JSON.stringify(value);
    localStorage.setItem('user', userStingfy);
  }

  getUserInfo(): User {
    if (localStorage.getItem('user')) {
      const theUser = localStorage.getItem('user') || '';
      const parsedUser = JSON.parse(theUser);
      return parsedUser;
    } else {
      let demo = { name: 'demo', email: 'demo@gmail.com' };
      return demo;
    }
  }

  POST<DynamicType>(
    endpoint: string,
    data: DynamicType
  ): Observable<DynamicType> {
    return this.http.post<DynamicType>(`${this.serverUrl}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.getToken(),
      },
    });
  }

  GET<DynamicType>(endpoint: string): Observable<DynamicType> {
    return this.http.get<DynamicType>(`${this.serverUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.getToken(),
      },
    });
  }
  GETONE<DynamicType>(id: string, endpoint: string): Observable<DynamicType> {
    return this.http.get<DynamicType>(`${this.serverUrl}${endpoint}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.getToken(),
      },
    });
  }
  DELETE<DynamicType>(id: string, endpoint: string): Observable<DynamicType> {
    return this.http.delete<DynamicType>(`${this.serverUrl}${endpoint}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.getToken(),
      },
    });
  }

  getCustomers(): Observable<Array<Customer>> {
    return this.GET<Array<Customer>>('customers');
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.POST<Customer>('customers', customer);
  }
  deleteCustomer(id: string): Observable<Customer> {
    return this.DELETE<Customer>(id, 'customers');
  }
  getCustomer(id: string): Observable<Customer> {
    return this.GETONE<Customer>(id, 'customers');
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      `${this.serverUrl}customers/${id}`,
      customer,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken(),
        },
      }
    );
  }

  getEmployees(): Observable<Array<Employee>> {
    return this.GET<Array<Employee>>('employees');
  }

  getEmployee(id: string): Observable<Employee> {
    return this.GETONE<Employee>(id, 'employees');
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.POST<Employee>('employees', employee);
  }
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.serverUrl}employees/${id}`,
      employee,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken(),
        },
      }
    );
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.DELETE<Employee>(id, 'employees');
  }
  signup(user: User): Observable<User> {
    return this.POST<User>('users/signup', user);
  }

  login(user: User): Observable<User> {
    return this.POST<User>('users/login', user);
  }
}
