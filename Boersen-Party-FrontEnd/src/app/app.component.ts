import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceOverviewComponent } from './price-overview/price-overview.component'
import { CommonModule } from '@angular/common';
import {EventTriggerWindowComponent} from './event-trigger-window/event-trigger-window.component';
import {PriceEntryTabComponent} from './price-entry-tab/price-entry-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PriceOverviewComponent, CommonModule, PriceEntryTabComponent, EventTriggerWindowComponent],
  template: `
    <section>
      <!-- Price Overview Component -->
      <app-price-overview></app-price-overview>
    </section>

    <section>
      <app-price-entry-tab></app-price-entry-tab>
    </section>

    <section class="event-button">
      <app-event-trigger-window></app-event-trigger-window>
    </section>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boersen-Party';
}
