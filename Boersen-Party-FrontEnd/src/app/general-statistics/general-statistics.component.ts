import { Component } from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-general-statistics',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './general-statistics.component.html',
  styleUrl: './general-statistics.component.css'
})
export class GeneralStatisticsComponent {
  public chart: any = [];

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart (scatter = bar&line)

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
        datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
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

