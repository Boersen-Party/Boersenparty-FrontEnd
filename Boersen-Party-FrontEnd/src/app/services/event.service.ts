import { Injectable, signal } from '@angular/core';
import { timer } from 'rxjs'
import { PartyEvent } from '../_model/partyevent';
import { AuthService } from './auth.service';
import { PartyServiceService } from './party-service.service';
import { baseURL } from '../_config/config';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  timer = timer(0, 5000);
  events = signal<PartyEvent[]>([]);
   
  constructor(private authService: AuthService, private partyService: PartyServiceService) {
      this.timer.subscribe(() => {
       this.fetchEvents();
      });
}


  async fetchEvents() {
    //console.log("fetchEvents() called");
    const headers = await this.authService.addTokenToHeader();

    const partyId = this.partyService.activePartyId();
    if (partyId === null) {
      console.warn('Cannot fetch events: No active Party ID.');
      return;
    }

    let url = baseURL + '/' + partyId + '/events';
    console.log("fetching events from url:", url);

    axios.get(url, {
      headers: headers,
    })
      .then(response => {
        const fetchedEvents = response.data;
        //console.log("fetched events are:");
        //console.log(fetchedEvents);
        try {
          this.events.set(fetchedEvents);
        } catch (error) {
          console.error("Error while setting events:", error);
        }
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
  }


  async createEvent(newEvent: PartyEvent) {
    try {
      const headers = await this.authService.addTokenToHeader();
      const partyId = this.partyService.activePartyId();
      if (partyId === null) {
        console.error('Cannot create event: No active Party ID.');
        return;
      }

      let url = baseURL + '/' + partyId + '/events';
      console.log("createEvent calls url:", url);

      axios.post(url, newEvent, {
        headers: headers,
      })
        .then(response => {
          console.log("response from createEvent is:");
          console.log(response);
          const createdEvent = response.data;
          this.events.update((events) => [...events, createdEvent]);
        })
        .catch(error => {
          console.error("Error creating event:", error);
        });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  }

  async triggerEvent(eventId: number) {
    try {
      const headers = await this.authService.addTokenToHeader();
      const partyId = this.partyService.activePartyId();
  
      if (partyId === null) {
        console.error('Cannot trigger event: No active Party ID.');
        return;
      }
  
      const url = `${baseURL}/${partyId}/events/${eventId}`;
      console.log("Triggering event with URL:", url);
  
      axios.put(url, {}, { headers })
        .then(response => {
          console.log("Event triggered successfully:", response.data);
          // Optionally, you can refresh the events list here if needed
          //this.fetchEvents();
        })
        .catch(error => {
          console.error("Error triggering event:", error);
        });
    } catch (error) {
      console.error("Error in triggerEvent method:", error);
    }
  }
}
