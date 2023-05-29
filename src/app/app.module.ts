import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { RouterModule } from '@angular/router';
import { EmployeesModule } from './employees/employees.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { NgChartsModule } from 'ng2-charts';
import { DashboardModule } from './dashboard/dashboard.module';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CustomersModule,
    EmployeesModule,
    RouterModule,
    ReactiveFormsModule,
    AuthModule,
    CoreModule,
    MainModule,
    NgChartsModule,
    DashboardModule,
    AngularToastifyModule,
  ],
  exports: [BrowserModule],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
