import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
import { ErrFieldComponent } from './err-field/err-field.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    AddEmployeeModalComponent,
    ErrFieldComponent,
    EditEmployeeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
  ],
})
export class EmployeesModule {}
