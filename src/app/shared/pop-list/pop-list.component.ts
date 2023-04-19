import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { User } from '../interfaces/interfaces.component';

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.scss'],
})
export class PopListComponent {
  constructor(private api: ApiService) {}

  currentUser: User = this.api.getUserInfo();
}
