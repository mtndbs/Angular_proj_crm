import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from 'src/app/shared/interfaces/interfaces.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent {
  customer: Employee | null = null;

  title = `Edit Employee`;
  icon = 'fa-solid fa-house-chimney-user';
  loading = false;

  editEmployeeForm = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ],
    }),

    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    phone: new FormControl('', {
      validators: [Validators.minLength(6), Validators.maxLength(20)],
    }),
    birthday: new FormControl('', {
      validators: [Validators.minLength(2), Validators.maxLength(100)],
    }),
  });

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  getFieldControl(field: string): FormControl {
    return this.editEmployeeForm.get(field) as FormControl;
  }

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params) => {
          console.log(params);

          const id = params.get('id') as string;
          return this.api.getEmployee(id);
        })
      )
      .subscribe({
        next: (data: Employee) => {
          this.customer = data;
          const fName = data.name || '';
          const email = data.email || '';
          const phone = data.phone || '';
          const address = data.birthday || '';
          this.editEmployeeForm.get('name')?.setValue(fName);
          this.editEmployeeForm.get('email')?.setValue(email);
          this.editEmployeeForm.get('phone')?.setValue(phone);
          this.editEmployeeForm.get('birthday')?.setValue(address);
        },
        error: (err) => console.log(err),
      });
  }

  onSubmit() {
    this.loading = true;
    if (this.editEmployeeForm.invalid || !this.customer?._id) {
      console.log(this.editEmployeeForm.value);
      this.loading = false;
      console.log('invalid');
      return;
    }

    this.api
      .updateEmployee(this.customer?._id, this.editEmployeeForm.value)
      .subscribe({
        next: (data: Employee) => {
          setTimeout(() => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['employees']);
          }, 1000);
        },
        error: (err) => console.log(err),
      });
  }
}
