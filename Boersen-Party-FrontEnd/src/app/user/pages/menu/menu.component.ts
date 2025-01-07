import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {DrinkPriceOverviewUserComponent} from '../../components/drink-price-overview-user/drink-price-overview-user.component';
import {RouterOutlet} from '@angular/router';
import {MealPriceOverviewUserComponent} from '../../components/meal-price-overview-user/meal-price-overview-user.component';
import { PriceOverviewComponent } from "../../../personal/price-overview/price-overview.component";
import { UserPriceEntryTabComponent } from '../../components/user-price-entry-tab/user-price-entry-tab.component';
import { PriceEntryTabComponent } from '../../../veranstalter/price-entry-tab/price-entry-tab.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ToolbarComponent,
    MealPriceOverviewUserComponent,
    RouterOutlet,
    PriceOverviewComponent,
    PriceEntryTabComponent
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
