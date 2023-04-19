import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng_hu_crm';

  constructor(private auth: AuthService) {}
  loggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
