import { Component } from '@angular/core';
import {PriceOverview} from '../priceoverview';

@Component({
  selector: 'app-price-overview',
  standalone: true,
  imports: [],
  templateUrl: './price-overview.component.html',
  styleUrl: './price-overview.component.css'
})
export class PriceOverviewComponent {
  PriceOverview: PriceOverview = {
    id: 1234,
    name: 'Jaegermeister',
    price: 1.5,
    price_change: 1,
  };
}
