import { Component, effect } from '@angular/core';
import { PartyEvent } from '../../_model/partyevent';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-button',
  standalone: true,
  imports: [],
  templateUrl: './event-button.component.html',
  styleUrl: './event-button.component.css'
})
export class EventButtonComponent {
  events: PartyEvent[] = [];

  constructor(private eventService: EventService) {
    effect(() => {
      this.events = this.eventService.events();
      console.log("Updated parties in EventButtonComponent:", this.events);

    });
}

showGif = false;

triggerEvent(eventId: number) {
  if (eventId === 0) {
    console.warn('Cannot trigger event: Invalid event ID.');
    return;
  }

  this.showGif = true;

  setTimeout(() => {
    this.showGif = false;
    console.log('GIF ausgeblendet');
  }, 5000);

  console.log('Triggering event with ID:', eventId);
  this.eventService.triggerEvent(eventId);

}
}
