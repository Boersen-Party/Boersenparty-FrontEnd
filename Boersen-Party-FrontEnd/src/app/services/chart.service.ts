import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  createLineChart(
    canvas: HTMLCanvasElement,
    labels: string[],
    data: number[]
  ): Chart {
    const options: ChartConfiguration['options'] = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, 
        },
      },
      scales: {
        x: {
          grid: {
            display: false, 
          },
          ticks: {
            color: 'white',
          },
          title: {
            display: true,
            text: 'Zeit',
            color: 'white',
          },
        },
        y: {
          grid: {
            display: false, 
          },
          ticks: {
            color: 'white',
            callback: (value: any, index: number, ticks: any) => {
              // Show only first and last value
              if (index === 0 || index === ticks.length - 1) {
                return value;
              }
              return '';
            },
          },
          title: {
            display: true,
            text: 'Preis',
            color: 'white',
          },
        },
      },
    };

    return new Chart(canvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Preis',
            data,
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(255, 217, 0, 0.2)',
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options,
    });
  }
}
