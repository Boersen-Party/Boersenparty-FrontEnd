import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceOverviewComponent } from './price-overview/price-overview.component'
import { CommonModule } from '@angular/common';
import {EventTriggerWindowComponent} from './event-trigger-window/event-trigger-window.component';
import {PriceEntryTabComponent} from './price-entry-tab/price-entry-tab.component';
import {GeneralStatisticsComponent} from './general-statistics/general-statistics.component';
import { CreatePartyButtonClickWindowComponent } from "./create-party-button-click-window/create-party-button-click-window.component";
import {AddDrinkItemWindowComponent} from './add-drink-item-window/add-drink-item-window.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, PriceOverviewComponent, CommonModule, PriceEntryTabComponent, EventTriggerWindowComponent, GeneralStatisticsComponent, CreatePartyButtonClickWindowComponent, AddDrinkItemWindowComponent],
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
          <app-create-party-button-click-window/>
        </div>

        <div class="general-statistic-2">
          <h1>General Statistic Space 2</h1>
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
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Boersen-Party';
}
