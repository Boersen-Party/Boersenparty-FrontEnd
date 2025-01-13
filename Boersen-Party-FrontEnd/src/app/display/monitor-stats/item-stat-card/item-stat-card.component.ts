import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { Product } from '../../../_model/product';

@Component({
  selector: 'app-item-stat-card',
  standalone: true,
  imports: [],
  templateUrl: './item-stat-card.component.html',
  styleUrl: './item-stat-card.component.css'
})
export class ItemStatCardComponent implements AfterViewInit, OnChanges {
  @ViewChild('lineChart') lineChartRef!: ElementRef<HTMLCanvasElement>;
  @Input() product!: Product;
  @Input() chartData!: { x: string[]; y: number[] };

  private chartInstance: any; // Reference to the chart instance

  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && !changes['chartData'].firstChange) {
      this.updateChart();
    }
  }

  private initializeChart(): void {
    const { x, y } = this.chartData;

    // Format the x labels to only show time
    const formattedX = x.map(date => {
      const utcDate = new Date(date + 'Z'); // 'Z' for UTC
      return utcDate.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24-hour format
      });
    });

    this.chartInstance = this.chartService.createLineChart(
      this.lineChartRef.nativeElement,
      formattedX,
      y,
      {
        scales: {
          y: {
            ticks: {
              callback: function(tickValue: string | number) {
                const value = typeof tickValue === 'string' ? parseFloat(tickValue) : tickValue;
                return value.toFixed(2); // Limit to 2 decimal places
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context: any) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.y.toFixed(2); // Limit to 2 decimal places
                }
                return label;
              }
            }
          }
        }
      }
    );
  }

  private updateChart(): void {
    if (this.chartInstance) {
      const { x, y } = this.chartData;

      // Format the x labels to only show time
      const formattedX = x.map(date => {
        const utcDate = new Date(date + 'Z'); // 'Z' for UTC
        return utcDate.toLocaleTimeString('de-DE', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false, // 24-hour format
        });
      });

      this.chartInstance.data.labels = formattedX; // Update labels
      this.chartInstance.data.datasets[0].data = y; // Update data
      this.chartInstance.update(); // Refresh the chart
    }
  }
}
