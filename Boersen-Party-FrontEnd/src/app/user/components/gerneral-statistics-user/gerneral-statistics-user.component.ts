import { Component, effect } from '@angular/core';
import { CircularBuffer } from '../../../_datastructure/CircularBuffer';
import { ProductService } from '../../../services/products.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-gerneral-statistics-user',
  standalone: true,
  imports: [],
  templateUrl: './gerneral-statistics-user.component.html',
  styleUrl: './gerneral-statistics-user.component.css'
})
export class GerneralStatisticsUserComponent {
  latestPriceBuffers: Map<number, CircularBuffer<{ timestamp: string | undefined, price: number }>> = new Map();
  productData: Map<number, { timestamps: string[], prices: number[] }> = new Map();
  overallAveragePrice: number = 0;
  averagePriceHistory: { timestamp: string, average: number }[] = []; // To track the evolution
  chart: Chart | undefined;

  constructor(private productService: ProductService) {
    effect(() => {
      const newBuffers = this.productService.latestPriceBuffers();
      this.productData.clear();

      newBuffers.forEach((buffer, productId) => {
        const timestamps: string[] = [];
        const prices: number[] = [];

        buffer.toArray().forEach(({ timestamp, price }) => {
          if (timestamp) {
            timestamps.push(timestamp);
            prices.push(price);
          }
        });

        this.productData.set(productId, { timestamps, prices });
      });

      this.calculateOverallAveragePrice();

      const now = new Date().toISOString().slice(0, 16); // Current timestamp in ISO format (YYYY-MM-DDTHH:mm)
      this.averagePriceHistory.push({ timestamp: now, average: this.overallAveragePrice });

      this.plotAveragePrice();

      console.log('Product Data:', this.productData);
      console.log('Overall Average Price History:', this.averagePriceHistory);
    });
  }

  calculateOverallAveragePrice() {
    let totalSum = 0;
    let totalCount = 0;

    this.productData.forEach(({ prices }) => {
      totalSum += prices.reduce((sum, price) => sum + price, 0);
      totalCount += prices.length;
    });

    this.overallAveragePrice = totalCount > 0 ? totalSum / totalCount : 0;
  }

  plotAveragePrice() {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = document.getElementById('averagePriceChart') as HTMLCanvasElement;

    const lastTimestamp = this.averagePriceHistory.length > 0
      ? this.averagePriceHistory[this.averagePriceHistory.length - 1].timestamp
      : '';

    const labels = this.averagePriceHistory.map(() => lastTimestamp);

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Overall Average Drink Price',
            data: this.averagePriceHistory.map(entry => entry.average),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            tension: 0.4,
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
          x: {
            title: {
              display: true,
              text: 'Time',
            },
            ticks: {
              callback: (value, index) => {
                return index === this.averagePriceHistory.length - 1 ? lastTimestamp : '';
              },
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Average Price',
            },
          },
        },
      },
    });
  }
}

