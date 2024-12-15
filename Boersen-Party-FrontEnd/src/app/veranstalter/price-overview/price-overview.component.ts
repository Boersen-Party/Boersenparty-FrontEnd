import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../_model/product';



@Component({
  standalone: true,
  selector: 'app-price-overview', // Since it's standalone
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './price-overview.component.html',
  styleUrls: ['./price-overview.component.css']
})

export class PriceOverviewComponent {
  @Input() products: Product[] = [
    { id: 1, name: 'Jägermeister', price: 2.7, price_change: 35 }
  ];
}
