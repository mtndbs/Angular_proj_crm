import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import {
  Customer,
  Employee,
} from 'src/app/shared/interfaces/interfaces.component';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss'],
})
export class AddEmployeeModalComponent {
  title = 'Add Employee';

  constructor(private api: ApiService) {}
  @Output() buttonClicked = new EventEmitter();

  onButtonClick() {
    this.buttonClicked.emit();
  }
  addEmployeeForm = new FormGroup({
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
      validators: [
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.required,
      ],
    }),
    birthday: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  getFieldControl(field: string): FormControl {
    return this.addEmployeeForm.get(field) as FormControl;
  }

  // Some code mulipulation for bootstrap form modal working well
  dismissModal = '';
  dismissFunc() {
    if (this.addEmployeeForm.valid) {
      this.dismissModal = 'modal';
      console.log(this.dismissModal);
    } else {
      this.dismissModal = '';
    }
  }

  onSubmit() {
    if (this.addEmployeeForm.invalid) {
      console.log('invalid');
      console.log(this.addEmployeeForm.value);
      return;
    }
    this.dismissModal = 'modal';
    console.log(this.addEmployeeForm.value);
    this.api.addEmployee(this.addEmployeeForm.value).subscribe({
      next: (data: Employee) => {
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }
}
