import { Component } from '@angular/core';
import {PriceOverviewComponent} from './price-overview/price-overview.component';
import {SubTotalComponent} from './sub-total/sub-total.component';
import {PayButtonComponent} from './pay-button/pay-button.component';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [PriceOverviewComponent, SubTotalComponent, PayButtonComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

}
