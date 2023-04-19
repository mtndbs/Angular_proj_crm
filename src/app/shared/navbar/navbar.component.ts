import { Component } from '@angular/core';
import { User } from '../interfaces/interfaces.component';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  currentUser: User = this.api.getUserInfo();

  // getFirstLetter(user: any): any {
  //   let userName = user[0];
  //   return userName.toUpperCase();
  // }

  popup = false;

  popupFunc() {
    this.popup = !this.popup;
  }
  logout() {
    this.api.deleteToken();
    this.router.navigate(['login']);
  }
}
