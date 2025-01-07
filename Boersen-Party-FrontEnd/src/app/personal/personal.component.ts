import { Component } from '@angular/core';
import {PriceOverviewComponent} from './price-overview/price-overview.component';
import {SubTotalComponent} from './sub-total/sub-total.component';
import {PayButtonComponent} from './pay-button/pay-button.component';
import {EventButtonComponent} from './event-button/event-button.component';
import {ReservationListComponent} from './reservation-list/reservation-list.component';
import {LogoutBtnComponent} from '../logout-btn/logout-btn.component';

@Component({
  standalone: true,
  selector: 'app-personal',
  imports: [PriceOverviewComponent, SubTotalComponent, PayButtonComponent, EventButtonComponent, ReservationListComponent, LogoutBtnComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

}
