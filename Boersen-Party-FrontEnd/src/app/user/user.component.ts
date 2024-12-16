import { Component } from '@angular/core';
import {DrinkPriceOverviewUserComponent} from './components/drink-price-overview-user/drink-price-overview-user.component';
import {GerneralStatisticsUserComponent} from './components/gerneral-statistics-user/gerneral-statistics-user.component';
import {FavoriteItemComponent} from './components/favorite-item/favorite-item.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [DrinkPriceOverviewUserComponent, GerneralStatisticsUserComponent, FavoriteItemComponent, ToolbarComponent, RouterOutlet],
  templateUrl: `./user.component.html`,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
}
