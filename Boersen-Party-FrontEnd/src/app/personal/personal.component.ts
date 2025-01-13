import { Component, effect } from '@angular/core';
import {PriceOverviewComponent} from './price-overview/price-overview.component';
import {SubTotalComponent} from './sub-total/sub-total.component';
import {EventButtonComponent} from './event-button/event-button.component';
import {ReservationListComponent} from './reservation-list/reservation-list.component';
import {LogoutBtnComponent} from '../logout-btn/logout-btn.component';
import { QRButtonComponent } from './qrbutton/qrbutton.component';
import { PartyServiceService } from '../services/party-service.service';
import { Party } from '../_model/party';

@Component({
  standalone: true,
  selector: 'app-personal',
  imports: [PriceOverviewComponent, SubTotalComponent, QRButtonComponent, EventButtonComponent, ReservationListComponent, LogoutBtnComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {


}
