import { Component } from '@angular/core';
import { PartyHeaderComponent } from './party-header/party-header.component';
import { SwipeableStatsgridComponent } from './swipeable-statsgrid/swipeable-statsgrid.component';

@Component({
  standalone: true,
  selector: 'app-display',
  imports: [PartyHeaderComponent, SwipeableStatsgridComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

}
