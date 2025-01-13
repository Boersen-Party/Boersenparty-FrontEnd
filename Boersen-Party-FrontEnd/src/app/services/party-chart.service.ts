import { Injectable, signal } from '@angular/core';
import { PartyServiceService } from './party-service.service';
import { baseURL } from '../_config/config';
import axios from 'axios';
import { PartyStats } from '../_model/partystats';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyChartService {
  timer = timer(0, 50000)
  partyStats = signal<PartyStats[]>([]);

  constructor(private partyService: PartyServiceService) {
    this.timer.subscribe(_ => {
      this.fetchPartyStats();
    })
   }

  

   async fetchPartyStats(): Promise<void> {
    const activePartyId = this.partyService.getActivePartyId();
    if (!activePartyId) {
      console.warn('No active party ID found. Skipping stats fetch.');
      return;
    }

    try {
      const URL = `${baseURL}/${activePartyId}/partystats`;

      const response = await axios.get(URL);
      console.log('Response is:', response.data);
      const fetchedStats: PartyStats = response.data;

      // Filter out duplicates based on the unique `totalOrders` property
      const isUnique = !this.partyStats().some(stats => stats.totalOrders === fetchedStats.totalOrders);

      if (isUnique) {
        // Use .set to replace the signal value with the updated array
        this.partyStats.set([...this.partyStats(), fetchedStats]);
        console.log('Fetched PartyStats (added):', fetchedStats);
      } else {
        console.log('Duplicate PartyStats (ignored):', fetchedStats);
      }
    } catch (error) {
      console.error('Error fetching party stats:', error);
    }
  }
  
}
