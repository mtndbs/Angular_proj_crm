import { Component } from '@angular/core';

export interface Customer {
  _id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
}
export interface User {
  _id?: string | null;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  confirm?: string | null | undefined;
  token?: string | null;
  user?: User;
}
export interface Employee {
  _id?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  birthday?: string | null;
}

@Component({
  selector: 'app-interfaces',
  template: '',
})
export class InterfacesComponent {}
