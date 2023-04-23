import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild('popup') popup!: ElementRef;
  @ViewChild('poptwo') poptwo!: ElementRef;

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    if (
      this.popup?.nativeElement.contains(event.target) ||
      this.poptwo?.nativeElement.contains(event.target)
    ) {
      console.log('stay open');
      // this.buttonClicked.emit();
    } else {
      this.poplist = false;
    }
  }

  constructor(private api: ApiService, private router: Router) {}

  currentUser: User = this.api.getUserInfo();

  // getFirstLetter(user: any): any {
  //   let userName = user[0];
  //   return userName.toUpperCase();
  // }

  poplist = false;

  popupFunc() {
    this.poplist = !this.poplist;
  }

  closePop() {
    // setTimeout(() => {
    //   if (this.poplist === true) {
    //     this.poplist = false;
    //   }
    // }, 1000);
    console.log('close');
  }
  logout() {
    this.api.deleteToken();
    this.router.navigate(['login']);
  }
}
