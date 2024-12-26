import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-gerneral-statistics-user',
  standalone: true,
  imports: [],
  templateUrl: './gerneral-statistics-user.component.html',
  styleUrl: './gerneral-statistics-user.component.css'
})
export class GerneralStatisticsUserComponent {
  public chart: any = [];

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart (scatter = bar&line)

      data: {// values on X-Axis
        labels: ['19:00', '19:30', '20:00','20:30', '21:00', '21:30', '22:00','22:30', ],
        datasets: [
          {
            label: "Sales",
            data: ['5','15', '45', '50', '35', '30', '55', '60'],
            backgroundColor: 'blue'
          },
          {
            label: "Price",
            data: ['2,7', '5', '5', '5', '5', '5', '5', '5'],
            backgroundColor: '#60C3B8'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
