import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}
  errMsgView = false;
  errorMsg = '';

  loginMsgView = false;
  loginMsg = 'Welcome back !  few seconds for login  ';

  loading = false;
  btnText = 'Login';

  loadingFunction() {
    if (this.loading == false) {
      this.loading = !this.loading;
      this.btnText = 'Loading...';
    }
  }

  loginForm = new FormGroup({
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
  });
  getFieldControl(field: string): FormControl {
    return this.loginForm.get(field) as FormControl;
  }
  onSubmit() {
    this.errMsgView = false;
    if (this.loginForm.invalid) {
      console.log('invalid form');
      return;
    }

    this.api.login(this.loginForm.value).subscribe({
      next: (data) => {
        this.loginMsgView = true;
        if (data) this.api.setUserInfo(data.user);
        console.log(data);
        setTimeout(() => {
          if (data.token) this.api.setToken(data.token);
          this.router.navigate([this.auth.redirectUrl]);
        }, 2000);
      },
      error: (err) => {
        // console.log(err.error);
        this.handleLoginError(err);
        setTimeout(() => {
          this.errMsgView = true;
          this.loading = false;
          this.btnText = 'LogIn';
        }, 1200);
      },
    });
  }

  handleLoginError(error: any): void {
    if (error.status === 401) {
      // Unauthorized access error
      this.errorMsg = 'Invalid username or password.';
    } else if (error.status === 404) {
      // Resource not found error
      this.errorMsg = 'Could not find login endpoint.';
    } else if (error.status === 500) {
      // Server error
      this.errorMsg = 'Server error. Please try again later.';
    } else {
      // Other error
      this.errorMsg = 'An error occurred. Please try again later.';
    }
  }
}