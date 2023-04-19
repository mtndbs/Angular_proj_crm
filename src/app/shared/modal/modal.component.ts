import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from '../interfaces/interfaces.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private api: ApiService) {}
  @Input() i: number = 0;
  @Input() fName: string | null | undefined = '';
  @Input() lName: string | null | undefined = '';
  @Input() id: string | null | undefined = '';
  @Input() title: string | null | undefined = '';

  @Input()
  myGenericDelete!: (id: any) => void;

  @Output() buttonClicked = new EventEmitter();

  onButtonClick() {
    this.buttonClicked.emit();
  }

  genDelete(id: any) {
    console.log('generated delete');
    this.myGenericDelete(id);
  }
  // deleteCustomer(id: string | null | undefined) {
  //   if (!id) {
  //     return;
  //   }
  //   this.api.deleteCustomer(id).subscribe({
  //     next: (data: Customer) => {
  //       console.log(data);
  //     },
  //     error: (err) => console.log(err),
  //   });
  // }
  // onDelete(task: Task) {
  //   if (!task._id) {
  //     return;
  //   }

  //   this.api.deleteTask(task._id).subscribe({
  //     next: (data: Task) => {
  //       this.getTasks();
  //     },
  //     error: (err) => console.log(err),
  //   });
  // }
}
