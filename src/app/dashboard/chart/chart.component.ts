import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Customers',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgb(46, 175, 125,0.3)',
      },
      {
        data: [65, 20, 80, 12, 56, 100, 40],
        label: 'Payments',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgb(63, 208, 201,0.4)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
