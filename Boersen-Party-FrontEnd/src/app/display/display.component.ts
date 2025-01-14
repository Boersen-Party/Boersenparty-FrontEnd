import { Component, effect } from '@angular/core';
import { PartyHeaderComponent } from './party-header/party-header.component';
import { PartyServiceService } from '../services/party-service.service';
import { ProductService } from '../services/products.service';
import { Party } from '../_model/party';
import { Product } from '../_model/product';
import {MonitorStatsComponent} from './monitor-stats/monitor-stats.component';

@Component({
  standalone: true,
  selector: 'app-display',
  imports: [PartyHeaderComponent, MonitorStatsComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  party: Party | null = null;
  partyName: string = '';

  constructor(private partyService: PartyServiceService) {
    effect(() => {
      this.party = this.partyService._lastParty();
      console.log("Updated parties in DisplayComponent:", this.party);
      this.partyName = this.party ? this.party.name :  '<Keine aktive Party vorhanden>';
    });

  }
}
