import { Component } from '@angular/core';
import {PriceOverviewComponent} from '../veranstalter/price-overview/price-overview.component';
import {EventTriggerWindowComponent} from '../veranstalter/event-trigger-window/event-trigger-window.component';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [PriceOverviewComponent, EventTriggerWindowComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

}
