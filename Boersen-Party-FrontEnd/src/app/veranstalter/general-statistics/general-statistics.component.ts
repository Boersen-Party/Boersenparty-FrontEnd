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

      // Unpack data into separate arrays
      this.partyStats = fetchedStatsArray.slice(-5); // Keep only the last 10 entries or as required
      this.revenue = this.partyStats.map((stats) => stats.revenue);
      this.profit = this.partyStats.map((stats) => stats.profit);
      this.totalOrders = this.partyStats.map((stats) => stats.totalOrders);

      console.log('Revenue:', this.revenue);
      console.log('Profit:', this.profit);
      console.log('Total Orders:', this.totalOrders);

      // Initialize or update charts
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
        labels: [], // Initially empty
        datasets: [
          {
            label: 'Revenue',
            data: [], // Initially empty
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barPercentage: 0.4, // Adjust width of the bars
            categoryPercentage: 0.8, // Controls space between bars
          },
          {
            label: 'Profit',
            data: [], // Initially empty
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
          },
          x: {
            grid: {
              display: false, // Hides the grid lines on the x-axis
            },
          },
        },
      },
    });
  }

  private updateRevenueProfitChart(): void {
    // Generate the labels as time
    const timeLabels = this.partyStats.map((_, index) => this.formatTime(new Date()));
  
    // Set the first and last labels to time
    const displayLabels = timeLabels.map((time, index) => {
      if (index === 0 || index === timeLabels.length - 1) {
        return time;
      }
      return ''; // Hide intermediate labels
    });
  
    // Update labels and datasets with new data for revenue and profit
    this.revenueProfitChart.data.labels = displayLabels;
    this.revenueProfitChart.data.datasets[0].data = this.revenue; // Revenue
    this.revenueProfitChart.data.datasets[1].data = this.profit; // Profit
  
    // Call update to render the new data
    this.revenueProfitChart.update();
  }
  
  private updateTotalOrdersChart(): void {
    // Generate the labels as time
    const timeLabels = this.partyStats.map((_, index) => this.formatTime(new Date()));
  
    // Set the first and last labels to time
    const displayLabels = timeLabels.map((time, index) => {
      if (index === 0 || index === timeLabels.length - 1) {
        return time;
      }
      return ''; // Hide intermediate labels
    });
  
    // Update labels and dataset with new data for total orders
    this.totalOrdersChart.data.labels = displayLabels;
    this.totalOrdersChart.data.datasets[0].data = this.totalOrders;
  
    // Call update to render the new data
    this.totalOrdersChart.update();
  }
  
  private formatTime(date: Date): string {
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();
  
    // Pad hours and minutes with leading zeros if needed
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
  
    return `${hours}:${minutes}`;
  }
  

  private initTotalOrdersChart(): void {
    const canvas = this.totalOrdersCanvas.nativeElement;
    this.totalOrdersChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [], // Initially empty
        datasets: [
          {
            label: 'Total Orders',
            data: [], // Initially empty
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            barPercentage: 0.2, // Set to 0.2 to make bars thinner
            categoryPercentage: 1, // Adjust categoryPercentage if necessary for spacing
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false, // Start from a value higher than 0
            min: 1, // Set minimum value for y-axis (adjust based on your data)
            ticks: {
              stepSize: 10, // Controls the distance between tick marks (adjust as needed)
              callback: (value) => `${value}`, // Optional: format the ticks to display in a more readable way
            },
            title: {
              display: true,
              text: 'Verarbeitete Bestellungen', // Provide a more informative label for the y-axis
            },
          },
          x: {
            grid: {
              display: false, // Hides the grid lines on the x-axis
            },
          },
        },
      },
    });
  }
  
}
