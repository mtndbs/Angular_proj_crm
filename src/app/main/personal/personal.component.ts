import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { User } from 'src/app/shared/interfaces/interfaces.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  constructor(private api: ApiService) {}

  currentUser: User = this.api.getUserInfo();
}
