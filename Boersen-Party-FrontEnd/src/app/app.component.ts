import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceOverviewComponent } from './price-overview/price-overview.component'
import { CommonModule } from '@angular/common';
import {PriceEntryTabComponent} from './price-entry-tab/price-entry-tab.component';
import {EventTriggerWindowComponent} from './event-trigger-window/event-trigger-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PriceOverviewComponent, CommonModule, PriceEntryTabComponent, EventTriggerWindowComponent],
  template: `
    <section>
      <!-- Price Overview Component -->
      <app-price-overview></app-price-overview>
    </section>
    // <app-event-trigger-window></app-event-trigger-window>
    <section>
      <app-price-entry-tab></app-price-entry-tab>
    </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boersen-Party';
}
