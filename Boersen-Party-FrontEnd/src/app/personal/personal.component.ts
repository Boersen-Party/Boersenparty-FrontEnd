import { Component } from '@angular/core';
import {PriceOverviewComponent} from './price-overview/price-overview.component';
import {SubTotalComponent} from './sub-total/sub-total.component';
import {EventButtonComponent} from './event-button/event-button.component';
import {ReservationListComponent} from './reservation-list/reservation-list.component';
import { QRButtonComponent } from './qrbutton/qrbutton.component';

@Component({
  standalone: true,
  selector: 'app-personal',
  imports: [PriceOverviewComponent, SubTotalComponent, QRButtonComponent, EventButtonComponent, ReservationListComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

}
