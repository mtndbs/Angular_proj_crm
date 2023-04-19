import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-err-field',
  templateUrl: './err-field.component.html',
  styleUrls: ['./err-field.component.scss'],
})
export class ErrFieldComponent {
  @Input() formField?: FormControl<any>;
  fieldErr(): string {
    const control = this.formField;
    if (!control || !control.errors || !control.dirty || !control.touched) {
      return '';
    }

    if (control.getError('required')) {
      return 'This field is required';
    }

    const maxlengthErr = control.getError('maxlength');
    if (maxlengthErr) {
      return `Cannot be longer than ${maxlengthErr.requiredLength}`;
    }

    const minlengthErr = control.getError('minlength');
    if (minlengthErr) {
      return `Cannot be shorter than ${minlengthErr.requiredLength}`;
    }

    if (control.getError('email')) {
      return 'Email is not valid';
    }

    return '';
  }
}
