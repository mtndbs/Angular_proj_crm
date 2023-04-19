import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss'],
})
export class BackBtnComponent {
  @Input() path = '';

  constructor(private _location: Location) {}
  backPage() {
    this._location.back();
  }
}
