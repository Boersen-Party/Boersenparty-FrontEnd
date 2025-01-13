import { Component, effect } from '@angular/core';
import { EventService } from '../../services/event.service';
import { PartyEvent } from '../../_model/partyevent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-trigger-window',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-trigger-window.component.html',
  styleUrl: './event-trigger-window.component.css'
})
export class EventTriggerWindowComponent {
  events: PartyEvent[] = [];
  isSetEventWindowOpen = false;
  hideInputButton: boolean = false; //when the 2 events are configured, the button should be hidden

  //for the creation
  eventType: string = '';
  eventDuration: number | null = null;

  constructor(private eventService: EventService) {
    
        effect(() => {
          this.events = this.eventService.events();
          console.log("effect called in EVENTTRIGGERWINDOW!");
          this.updateHideInputButton()
        });
    
      }

  toggleCreateEventWindow() {
    this.isSetEventWindowOpen = !this.isSetEventWindowOpen;}


    createEvent() {
      if (!this.eventType || !this.eventDuration) {
        console.error("Event type or duration is missing!");
        return;
      }
  
      const newEvent: PartyEvent = {
        type: this.eventType,
        duration: this.eventDuration
      };

      this.eventService.createEvent(newEvent);
      this.toggleCreateEventWindow();
    }

    private updateHideInputButton() {
      this.hideInputButton = this.events.length >= 2;
    }
}
