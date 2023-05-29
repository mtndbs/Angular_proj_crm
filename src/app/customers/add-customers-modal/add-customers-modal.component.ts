import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/interfaces.component';

@Component({
  selector: 'app-add-customers-modal',
  templateUrl: './add-customers-modal.component.html',
  styleUrls: ['./add-customers-modal.component.scss'],
})
export class AddCustomersModalComponent {
  title = 'Add Customer';
  myTest = 'hello';
  // @ViewChild('nameFieldRef') nameField!: ElementRef;
  constructor(private api: ApiService) {}
  @Output() buttonClicked = new EventEmitter();

  onButtonClick() {
    this.buttonClicked.emit();
  }
  addcustomerForm = new FormGroup({
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
      validators: [
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.required,
      ],
    }),
    address: new FormControl('', {
      validators: [
        Validators.minLength(6),
        Validators.maxLength(100),
        Validators.required,
      ],
    }),
  });

  getFieldControl(field: string): FormControl {
    return this.addcustomerForm.get(field) as FormControl;
  }

  // Some code mulipulation for bootstrap form modal working well
  dismissModal = '';
  dismissFunc() {
    if (this.addcustomerForm.valid) {
      this.dismissModal = 'modal';
      console.log(this.dismissModal);
    } else {
      this.dismissModal = '';
    }
  }

  onSubmit() {
    if (this.addcustomerForm.invalid) {
      console.log('invalid');
      return;
    }
    this.dismissModal = 'modal';
    console.log(this.addcustomerForm.value);
    this.api.addCustomer(this.addcustomerForm.value).subscribe({
      next: (data: Customer) => {
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }
}
