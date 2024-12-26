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
  templateUrl: `./veranstalter.component.html`,
  styleUrl: './veranstalter.component.css'
})
export class VeranstalterComponent {

}
