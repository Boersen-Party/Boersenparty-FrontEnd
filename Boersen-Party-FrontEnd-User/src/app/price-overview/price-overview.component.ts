import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { PriceOverview } from './priceoverview';

@Component({
  selector: 'app-price-overview',
  standalone: true, // Since it's standalone
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './price-overview.component.html',
  styleUrls: ['./price-overview.component.css']
})
export class PriceOverviewComponent {
  @Input() prices: PriceOverview[] = [
    { id: 1, name: 'Jägermeister', price: 2.7, price_change: 35 },
    { id: 2, name: 'Caipirinha', price: 9.9, price_change: -35 },
    { id: 3, name: 'Sex on the Beach', price: 2.7, price_change: 35 },
    { id: 4, name: 'Swimmingpool', price: 9.67, price_change: -25 },
    { id: 5, name: 'Piña Colada', price: 11.39, price_change: 15 },
    { id: 6, name: 'Negroni', price: 7.12, price_change: -20 },
    { id: 7, name: 'Cosmopolitan', price: 4.45, price_change: -50 },
    { id: 8, name: 'Manhattan', price: 16.02, price_change: 50 },
    { id: 9, name: 'Cuba Libre', price: 24.53, price_change: 125 }
  ];
}
