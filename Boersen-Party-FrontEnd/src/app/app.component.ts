import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import { PriceOverviewComponent} from './price-overview/price-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PriceOverviewComponent, NgOptimizedImage],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by drink"/>
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <priceOverview [priceOverview]="priceOverview"></priceOverview>/
    </section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Boersen-Party';
  @Input() priceOverview!: PriceOverviewComponent;
}
