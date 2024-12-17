import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-server-response-time',
  standalone: true,
  imports: [],
  templateUrl: './server-response-time.component.html',
  styleUrl: './server-response-time.component.css'
})

export class ServerResponseTimeComponent implements AfterViewInit {
  chart: any;

  // Simulierte Server Response Time Daten
  responseTimeData = [120, 150, 100, 180, 210, 130, 140]; // ms
  timeLabels = ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'];

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('responseTimeChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.timeLabels,
        datasets: [
          {
            label: 'Server Response Time (ms)',
            data: this.responseTimeData,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            tension: 0.4,
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Response Time (ms)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Time',
            },
          },
        },
      },
    });
  }
}
