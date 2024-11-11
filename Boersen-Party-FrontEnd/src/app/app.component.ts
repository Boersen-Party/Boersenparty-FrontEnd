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
    <div class= "main-grid">
      <!--Grid for Price Overview Element-->
      <div class="price-overiew-position">

        <section>
<<<<<<< HEAD
          <app-price-overview></app-price-overview>
        </section>

        <section>
          <app-price-entry-tab></app-price-entry-tab>
=======
          <app-price-overview/>
        </section>

        <section>
          <app-price-entry-tab/>
>>>>>>> Dominik
        </section>
      </div>
      <!-- End of Grid-->

      <!--Grid for Event Trigger-->
<<<<<<< HEAD
      <div class="event-button-position">
        <section>
          <app-event-trigger-window></app-event-trigger-window>
        </section>
=======
      <div class="second-grid">
        <div class="event-button-position">
          <section>
            <app-event-trigger-window/>
          </section>
        </div>

        <div class="general-statistic-1">
          <h1>General Statistic Space 1</h1>
        </div>

        <div class="general-statistic-2">
          <h1>General Statistic Space 2</h1>
        </div>

        <div class="general-statistic-3">
          <h1>General Statistic Space 3</h1>
        </div>

>>>>>>> Dominik
      </div>
      <!-- End of Grid-->

    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boersen-Party';
}
