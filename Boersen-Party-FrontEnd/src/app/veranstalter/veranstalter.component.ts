import { Component } from '@angular/core';
import { PriceOverviewComponent} from './price-overview/price-overview.component';
import { CommonModule } from '@angular/common';
import { EventTriggerWindowComponent } from './event-trigger-window/event-trigger-window.component';
import { PriceEntryTabComponent } from './price-entry-tab/price-entry-tab.component';
import { GeneralStatisticsComponent } from './general-statistics/general-statistics.component';
import { CreatePartyButtonClickWindowComponent } from './create-party-button-click-window/create-party-button-click-window.component';

@Component({
  selector: 'app-veranstalter',
  standalone: true,
  imports: [PriceOverviewComponent, CommonModule, PriceEntryTabComponent, EventTriggerWindowComponent, GeneralStatisticsComponent, CreatePartyButtonClickWindowComponent],
  template: `
    <div class= "main-grid">
      <!--Grid for Price Overview Element-->
      <div class="price-overiew-position">

        <section>
          <app-price-overview/>
        </section>

        <section>
          <app-price-entry-tab/>
        </section>
      </div>
      <!-- End of Grid-->

      <!--Grid for Event Trigger-->

      <div class="second-grid">
        <div class="event-button-position">
          <section>
            <app-event-trigger-window/>
          </section>
        </div>

        <div class="general-statistic-1">
          <h1>General Statistic Space 4</h1>
        </div>

        <div class="general-statistic-2">
          <app-create-party-button-click-window/>
        </div>

        <div class="general-statistic-3">
          <section>
            <app-general-statistics/>
          </section>
        </div>

      </div>
      <!-- End of Grid-->

    </div>
  `,
  styleUrl: './veranstalter.component.css'
})
export class VeranstalterComponent {

}
