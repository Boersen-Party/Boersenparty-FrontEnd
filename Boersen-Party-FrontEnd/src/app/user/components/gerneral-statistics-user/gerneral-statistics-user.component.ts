import { Component, effect } from '@angular/core';
import Chart from 'chart.js/auto';
import { CircularBuffer } from '../../../_datastructure/CircularBuffer';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-gerneral-statistics-user',
  standalone: true,
  imports: [],
  templateUrl: './gerneral-statistics-user.component.html',
  styleUrl: './gerneral-statistics-user.component.css'
})
export class GerneralStatisticsUserComponent {

  latestPriceBuffers: Map<number, CircularBuffer<{ timestamp: string | undefined, price: number }>> = new Map();
  
    constructor(private productService: ProductService) {
      effect(() => {
        this.latestPriceBuffers = this.productService.latestPriceBuffers();
    });
  }
  

}

  