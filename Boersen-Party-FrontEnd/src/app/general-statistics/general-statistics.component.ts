import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-general-statistics',
  standalone: true,
  imports: [],
  templateUrl: './general-statistics.component.html',
  styleUrl: './general-statistics.component.css'
})
export class GeneralStatisticsComponent {

=======
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Chart, registerables],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createTotalUsersChart(): any {
    return {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [
          {
            label: 'Total Users',
            data: [12, 19, 22, 23],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }

  ngOnInit() {
    this.totalUsers = new Chart('totalUsers', this.createTotalUsersChart());
  }
>>>>>>> Dominik
}
