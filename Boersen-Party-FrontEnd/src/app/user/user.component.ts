import { Component } from '@angular/core';
import {DrinkPriceOverviewUserComponent} from './components/drink-price-overview-user/drink-price-overview-user.component';
import {GerneralStatisticsUserComponent} from './components/gerneral-statistics-user/gerneral-statistics-user.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {RouterOutlet} from '@angular/router';
import {FavoriteItemHomeComponent} from './components/favorite-item/favorite-item-home/favorite-item-home.component';
import { PriceOverviewComponent } from "../personal/price-overview/price-overview.component";

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [DrinkPriceOverviewUserComponent, GerneralStatisticsUserComponent, FavoriteItemHomeComponent, ToolbarComponent, RouterOutlet, PriceOverviewComponent],
  templateUrl: `./user.component.html`,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
}
