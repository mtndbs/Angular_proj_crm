import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { User } from '../interfaces/interfaces.component';

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.scss'],
})
export class PopListComponent {
  // @ViewChild('popup') popup!: ElementRef;
  // // @ViewChild('nameFieldRef') nameField!: ElementRef;

  // @HostListener('window:click', ['$event'])
  // onClick(event: MouseEvent) {
  //   if (!this.popup?.nativeElement.contains(event.target)) {
  //     console.log('hello');
  //     this.buttonClicked.emit();
  //   }
  // }
  // @Output() buttonClicked = new EventEmitter();

  // onButtonClick() {}

  constructor(private api: ApiService) {}

  currentUser: User = this.api.getUserInfo();
}
