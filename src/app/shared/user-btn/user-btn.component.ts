import { Component, Input } from '@angular/core';
import { User } from '../interfaces/interfaces.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-user-btn',
  templateUrl: './user-btn.component.html',
  styleUrls: ['./user-btn.component.scss'],
})
export class UserBtnComponent {
  constructor(private api: ApiService) {}
  @Input() flip = false;
  styleFunc() {
    if (this.flip == false) {
      return 'user-btn';
    } else {
      return 'user-btn-couter';
    }
  }

  currentUser: User = this.api.getUserInfo();

  getFirstLetter(user: any): any {
    let userName = user[0];
    return userName.toUpperCase();
  }
}
