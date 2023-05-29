import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddCustomersModalComponent } from './add-customers-modal/add-customers-modal.component';
import { ErrFieldComponent } from './err-field/err-field.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { RouterModule } from '@angular/router';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

@NgModule({
  declarations: [
    CustomersPageComponent,
    AddCustomersModalComponent,
    ErrFieldComponent,
    CustomersViewComponent,
    CustomersEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
})
export class CustomersModule {}
