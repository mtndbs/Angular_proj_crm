import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';
import { CustomersViewComponent } from './customers/customers-view/customers-view.component';
import { CustomersEditComponent } from './customers/customers-edit/customers-edit.component';
import { SignPageComponent } from './auth/sign-page/sign-page.component';
import { AuthService } from './core/auth.service';
import { HomePageComponent } from './main/home-page/home-page.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { PersonalComponent } from './main/personal/personal.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    canActivateChild: [AuthService],
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'customers', component: CustomersPageComponent },
      { path: 'employees', component: EmployeesPageComponent },
      { path: 'customers/:id', component: CustomersViewComponent },
      { path: 'edit/:id', component: CustomersEditComponent },
      { path: 'employees/edit/:id', component: EditEmployeeComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
