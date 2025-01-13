import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  createLineChart(
    canvas: HTMLCanvasElement,
    labels: string[],
    data: number[],
    options?: ChartConfiguration['options']
  ): Chart {

    const formattedLabels = this.formatLabels(labels);

    const defaultOptions: ChartConfiguration['options'] = {
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
              return formattedLabels[labelIndex];
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

    const risingColor = '#CC4E6C';
    const fallingColor = '#60C3B8';

    const customPlugin = {
      id: 'customLineSegmentColor',
      beforeDatasetsDraw: (chart: any) => {
        const ctx = chart.ctx;
        const dataset = chart.data.datasets[0];
        const meta = chart.getDatasetMeta(0);
        const points = meta.data;

        ctx.save();

        for (let i = 0; i < points.length - 1; i++) {
          const point = points[i];
          const nextPoint = points[i + 1];
          const color = dataset.data[i + 1] > dataset.data[i] ? risingColor : fallingColor;

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.strokeStyle = color;
          ctx.lineWidth = dataset.borderWidth;
          ctx.stroke();
        }

        ctx.restore();
      }
    };

    return new Chart(canvas, {
      type: 'line',
      data: {
        labels: formattedLabels,
        datasets: [
          {
            label: '',
            data,
            borderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 2,
            hoverRadius: 6,
          },
        ],
      },
      options: { ...defaultOptions, ...options },
      plugins: [customPlugin],
    });
  }

  private formatLabels(labels: string[]): string[] {
    return labels.map(dateString => {
      const date = new Date(dateString);
      console.log(
        'Input:', dateString,
        '| Parsed Date (Device Time):', date.toISOString(),
        '| Local Time (Device):', date.toLocaleString()
      );

      return new Intl.DateTimeFormat('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(date);
    });
  }
}
