import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import { PriceOverviewComponent} from './price-overview/price-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PriceOverviewComponent, NgOptimizedImage],
  template: `
    <main>

    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Boersen-Party';
}
