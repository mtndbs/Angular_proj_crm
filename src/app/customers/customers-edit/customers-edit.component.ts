import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/interfaces.component';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent {
  customer: Customer | null = null;

  title = `Edit Customer`;
  icon = 'fa-solid fa-house-chimney-user';
  loading = false;

  editCustomerForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ],
    }),
    lastName: new FormControl('', {
      validators: [
        Validators.minLength(2),
        Validators.maxLength(100),
        Validators.required,
      ],
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    phone: new FormControl('', {
      validators: [Validators.minLength(6), Validators.maxLength(20)],
    }),
    address: new FormControl('', {
      validators: [Validators.minLength(2), Validators.maxLength(100)],
    }),
  });

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  getFieldControl(field: string): FormControl {
    return this.editCustomerForm.get(field) as FormControl;
  }

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params) => {
          console.log(params);

          const id = params.get('id') as string;
          return this.api.getCustomer(id);
        })
      )
      .subscribe({
        next: (data: Customer) => {
          this.customer = data;
          const fName = data.firstName || '';
          const lName = data.lastName || '';
          const email = data.email || '';
          const phone = data.phone || '';
          const address = data.address || '';
          this.editCustomerForm.get('firstName')?.setValue(fName);
          this.editCustomerForm.get('lastName')?.setValue(lName);
          this.editCustomerForm.get('email')?.setValue(email);
          this.editCustomerForm.get('phone')?.setValue(phone);
          this.editCustomerForm.get('address')?.setValue(address);
        },
        error: (err) => console.log(err),
      });
  }

  onSubmit() {
    this.loading = true;
    if (this.editCustomerForm.invalid || !this.customer?._id) {
      console.log(this.editCustomerForm.value);
      this.loading = false;
      console.log('invalid');
      return;
    }

    this.api
      .updateCustomer(this.customer?._id, this.editCustomerForm.value)
      .subscribe({
        next: (data: Customer) => {
          setTimeout(() => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['customers']);
          }, 1000);
        },
        error: (err) => console.log(err),
      });
  }
}
