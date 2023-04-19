import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrFieldComponent } from './err-field/err-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignPageComponent } from './sign-page/sign-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginPageComponent, ErrFieldComponent, SignPageComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class AuthModule {}
