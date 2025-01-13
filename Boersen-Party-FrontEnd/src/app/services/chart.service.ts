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

    const formattedLabels = this.formatLabels(labels); // Format the labels

    const options: ChartConfiguration['options'] = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              const price = context.raw as number;
              return `Preis: ${price.toFixed(2)}`;
            },
            title: function (context) {
              const labelIndex = context[0].dataIndex;
              return formattedLabels[labelIndex]; // Use formatted label
            },
          },
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#FFFFFF',
          bodyColor: '#FFFFFF',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: '#BBBBBB',
          },
          title: {
            display: true,
            text: 'Zeit',
            color: '#FFFFFF',
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            color: '#BBBBBB',
            callback: (value: any, index: number, ticks: any) => {
              if (index === 0 || index === ticks.length - 1) {
                return value;
              }
              return '';
            },
          },
          title: {
            display: true,
            text: 'Preis',
            color: '#FFFFFF',
          },
        },
      },
    };

    return new Chart(canvas, {
      type: 'line',
      data: {
        labels: formattedLabels, // Pass formatted labels to the chart
        datasets: [
          {
            label: 'Preis',
            data,
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(255, 217, 0, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 2,
            hoverRadius: 6,
          },
        ],
      },
      options,
    });
  }
  // Helper function to format labels to display only the time
  private formatLabels(labels: string[]): string[] {
    return labels.map(dateString => {
      const date = new Date(dateString); // Parse the date string
      console.log(
        'Input:', dateString,
        '| Parsed Date (Device Time):', date.toISOString(),
        '| Local Time (Device):', date.toLocaleString()
      );

      // Format the time using the device's local settings
      return new Intl.DateTimeFormat('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // Use 24-hour format
      }).format(date);
    });
  }
}
