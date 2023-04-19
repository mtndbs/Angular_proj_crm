import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/interfaces.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss'],
})
export class CustomersViewComponent implements OnInit {
  title = 'View customer';
  icon = 'fa-solid fa-house-chimney-user';
  customer: Customer | null = null;

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute // private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id') as string;
          return this.api.getCustomer(id);
        })
      )
      .subscribe({
        next: (data: Customer) => {
          this.customer = data;
        },
        error: (err) => console.log(err),
      });
  }
}
