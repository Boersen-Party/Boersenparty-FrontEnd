import { Component } from '@angular/core';
import {PriceOverviewUserComponent} from './price-overview-user/price-overview-user.component';
import {GerneralStatisticsUserComponent} from './gerneral-statistics-user/gerneral-statistics-user.component';
import {FavoriteItemComponent} from './favorite-item/favorite-item.component';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [PriceOverviewUserComponent, GerneralStatisticsUserComponent, FavoriteItemComponent],
  templateUrl: `./user.component.html`,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
}
