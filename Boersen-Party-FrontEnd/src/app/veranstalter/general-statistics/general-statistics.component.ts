import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PartyChartService } from '../../services/party-chart.service';
import { PartyStats } from '../../_model/partystats';
import { Chart, registerables } from 'chart.js';
import { signal, effect } from '@angular/core';

Chart.register(...registerables);

@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css'],
  standalone: true
})
export class GeneralStatisticsComponent {
  @ViewChild('revenueProfitCanvas') revenueProfitCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('totalOrdersCanvas') totalOrdersCanvas!: ElementRef<HTMLCanvasElement>;

  revenueProfitChart!: Chart;
  totalOrdersChart!: Chart;

  partyStats: PartyStats[] = [];
  revenue: number[] = [];
  profit: number[] = [];
  totalOrders: number[] = [];

  constructor(private partyChartService: PartyChartService) {
    effect(() => {
      const fetchedStatsArray = this.partyChartService.partyStats();
      console.log('Fetched Stats Array (STATISTIC COMPONENT) is:', fetchedStatsArray);

      this.partyStats = fetchedStatsArray.slice(-5);
      this.revenue = this.partyStats.map((stats) => stats.revenue);
      this.profit = this.partyStats.map((stats) => stats.profit);
      this.totalOrders = this.partyStats.map((stats) => stats.totalOrders);

      console.log('Revenue:', this.revenue);
      console.log('Profit:', this.profit);
      console.log('Total Orders:', this.totalOrders);

      if (!this.revenueProfitChart) {
        this.initRevenueProfitChart();
      } else {
        this.updateRevenueProfitChart();
      }

      if (!this.totalOrdersChart) {
        this.initTotalOrdersChart();
      } else {
        this.updateTotalOrdersChart();
      }
    });
  }

  private initRevenueProfitChart(): void {
    const canvas = this.revenueProfitCanvas.nativeElement;
    this.revenueProfitChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Umsatz',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.8,
          },
          {
            label: 'Gewinn',
            data: [],
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(230,230,230,0.1)',
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  private updateRevenueProfitChart(): void {
    const timeLabels = this.partyStats.map((_, index) => this.formatTime(new Date()));

    const displayLabels = timeLabels.map((time, index) => {
      if (index === 0 || index === timeLabels.length - 1) {
        return time;
      }
      return '';
    });

    this.revenueProfitChart.data.labels = displayLabels;
    this.revenueProfitChart.data.datasets[0].data = this.revenue;
    this.revenueProfitChart.data.datasets[1].data = this.profit;

    this.revenueProfitChart.update();
  }

  private updateTotalOrdersChart(): void {
    const timeLabels = this.partyStats.map((_, index) => this.formatTime(new Date()));

    const displayLabels = timeLabels.map((time, index) => {
      if (index === 0 || index === timeLabels.length - 1) {
        return time;
      }
      return '';
    });

    this.totalOrdersChart.data.labels = displayLabels;
    this.totalOrdersChart.data.datasets[0].data = this.totalOrders;

    this.totalOrdersChart.update();
  }

  private formatTime(date: Date): string {
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;

    return `${hours}:${minutes}`;
  }

  private initTotalOrdersChart(): void {
    const canvas = this.totalOrdersCanvas.nativeElement;
    this.totalOrdersChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Verarbeitete Bestellungen',
            data: [],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            barPercentage: 0.2,
            categoryPercentage: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: 1,
            ticks: {
              stepSize: 10,
              callback: (value) => `${value}`,
            },
            title: {
              display: true,
              text: 'Verarbeitete Bestellungen',
            },
            grid: {
              color: 'rgba(230,230,230,0.1)',
            }
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}
