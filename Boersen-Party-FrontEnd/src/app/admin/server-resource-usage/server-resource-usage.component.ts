import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-server-resource-usage',
  standalone: true,
  imports: [],
  templateUrl: './server-resource-usage.component.html',
  styleUrl: './server-resource-usage.component.css'
})

export class ServerResourceUsageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.renderCpuChart();
    this.renderMemoryChart();
  }

  renderCpuChart(): void {
    const ctx = document.getElementById('cpuUsageChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Used', 'Free'],
        datasets: [
          {
            data: [49, 51], // CPU-Auslastung: 49% Used, 51% Free
            backgroundColor: ['#00A2FF', '#E0E0E0'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'CPU',
            color: 'white',
            font: { size: 16 }
          }
        },
        cutout: '70%'
      }
    });
  }

  renderMemoryChart(): void {
    const ctx = document.getElementById('memoryUsageChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Used', 'Free'],
        datasets: [
          {
            data: [81, 19], // Memory-Auslastung: 81% Used, 19% Free
            backgroundColor: ['#00A2FF', '#E0E0E0'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Memory',
            color: 'white',
            font: { size: 16 }
          }
        },
        cutout: '70%'
      }
    });
  }
}
