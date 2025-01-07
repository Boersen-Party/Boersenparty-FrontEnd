import { Component, effect } from '@angular/core';
import { ItemStatCardComponent } from './item-stat-card/item-stat-card.component';
import { Product } from '../../_model/product';
import { CircularBuffer } from '../../_datastructure/CircularBuffer';
import { ProductService } from '../../services/products.service';


@Component({
  selector: 'app-monitor-stats',
  standalone: true,
  imports: [ItemStatCardComponent],
  templateUrl: './monitor-stats.component.html',
  styleUrl: './monitor-stats.component.css'
})
export class MonitorStatsComponent {
  products: Product[] = [];
  latestPriceBuffers: Map<number, CircularBuffer<{ timestamp: string | undefined, price: number }>> = new Map();

  constructor(private productService: ProductService) {
    effect(() => {
      console.log("products before effect in SwipeableStatsGrid:", this.products);
      this.products = this.productService.products();
      console.log("Updated products in SwipeableStatsGrid:", this.products);
      this.latestPriceBuffers = this.productService.latestPriceBuffers();      
  });
}
  

  // extrahiert von der map die timestamp und price werte und packt sie
  // in x- und y-arrays, die für die Chart.js benötigt werden
  getChartData(productId: number): { x: string[]; y: number[] } {
    if (productId === 0) {
      throw new Error("Invalid product ID: 0. This indicates a missing or uninitialized product ID for Chart Creation.");
    }

    const buffer = this.latestPriceBuffers.get(productId);
    if (!buffer) {
      return { x: [], y: [] };
    }
    const data = buffer.toArray();
    //potentially very large data
    //console.log("Data for product", productId, ":", data);
    return {
      x: data.map(entry => entry.timestamp || "Unknown"),
      y: data.map(entry => entry.price)
    };
  }
}


