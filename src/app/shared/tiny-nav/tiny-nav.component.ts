import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiny-nav',
  templateUrl: './tiny-nav.component.html',
  styleUrls: ['./tiny-nav.component.scss'],
})
export class TinyNavComponent {
  @Input() title = '';
  @Input() icon = '';
}
