import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.scss'],
})
export class SignPageComponent {
  constructor(private api: ApiService, private router: Router) {}

  loading = false;
  btnText = 'SignIn';

  errorMsg = ' ';
  errMsgView = false;

  confirmErrMsg = false;
  confirmErrMsgValue = 'Password is not the same';

  signForm = new FormGroup({
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirm: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    name: new FormControl('', {
      validators: [
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.required,
      ],
    }),
  });
  getFieldControl(field: string): FormControl {
    return this.signForm.get(field) as FormControl;
  }
  onSubmit() {
    let value = this.signForm.getRawValue();
    if (this.signForm.invalid || value.password != value.confirm) {
      this.confirmErrMsg = true;
      this.loading = false;
      this.btnText = 'SignIn';
      return;
    }
    const { name, email, password } = value;

    this.api.signup({ name, email, password }).subscribe({
      next: (data) => {
        console.log(data);
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 1400);
      },
      error: (err) => {
        console.log(err.error);
        this.handleLoginError(err);
        setTimeout(() => {
          this.errMsgView = true;
          this.loading = false;
          this.btnText = 'SignIn';
        }, 1200);
      },
    });
  }

  loadingFunction() {
    if (this.loading == false) {
      this.loading = !this.loading;
      this.btnText = 'Loading...';
    }
  }

  handleLoginError(error: any): void {
    if (error.status === 409) {
      this.errorMsg = 'Sorry but this email already exists';
    } else if (error.status === 500) {
      // Server error
      this.errorMsg = 'Server error. Please try again later.';
    } else {
      // Other error
      this.errorMsg = 'An error occurred. Please try again later.';
    }
  }
}
