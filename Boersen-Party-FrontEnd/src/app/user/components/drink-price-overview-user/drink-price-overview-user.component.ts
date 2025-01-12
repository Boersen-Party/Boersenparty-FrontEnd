import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceOverview } from './priceoverview';

@Component({
  standalone: true,
  selector: 'app-drink-price-overview-user',
  imports: [CommonModule],
  templateUrl: './drink-price-overview-user.component.html',
  styleUrls: ['./drink-price-overview-user.component.css']
})

export class DrinkPriceOverviewUserComponent {
}
