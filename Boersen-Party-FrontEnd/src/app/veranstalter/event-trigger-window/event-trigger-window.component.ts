import { Component } from '@angular/core';

@Component({
  selector: 'app-event-trigger-window',
  standalone: true,
  imports: [],
  templateUrl: './event-trigger-window.component.html',
  styleUrl: './event-trigger-window.component.css'
})
export class EventTriggerWindowComponent {
  isSetEventWindowOpen = false;

  toggleCreateEventWindow() {
    this.isSetEventWindowOpen = !this.isSetEventWindowOpen;}
}
