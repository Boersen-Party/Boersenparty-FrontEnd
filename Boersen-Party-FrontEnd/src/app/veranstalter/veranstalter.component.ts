import { ChangeDetectorRef, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTriggerWindowComponent } from './event-trigger-window/event-trigger-window.component';
import { PriceEntryTabComponent } from './price-entry-tab/price-entry-tab.component';
import { GeneralStatisticsComponent } from './general-statistics/general-statistics.component';
import { CreatePartyButtonClickWindowComponent } from './create-party-button-click-window/create-party-button-click-window.component';
import { CreatedPartyTabComponent } from "./created-party-tab/created-party-tab.component";
import { PartyServiceService } from '../_services/party-service.service';

@Component({
  selector: 'app-veranstalter',
  standalone: true,
  imports: [ CommonModule, PriceEntryTabComponent, EventTriggerWindowComponent, GeneralStatisticsComponent, CreatePartyButtonClickWindowComponent, CreatedPartyTabComponent],
  templateUrl: `./veranstalter.component.html`,
  styleUrl: './veranstalter.component.css'
})
export class VeranstalterComponent {
  partiesAlreadyPresent = computed(() => this.partyService.parties().length > 0);

  constructor(public partyService: PartyServiceService) {}
}
