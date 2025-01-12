import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {DrinkPriceOverviewUserComponent} from '../../components/drink-price-overview-user/drink-price-overview-user.component';
import {RouterOutlet} from '@angular/router';
import {MealPriceOverviewUserComponent} from '../../components/meal-price-overview-user/meal-price-overview-user.component';
import { PriceOverviewComponent } from "../../../personal/price-overview/price-overview.component";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        ToolbarComponent,
        DrinkPriceOverviewUserComponent,
        MealPriceOverviewUserComponent,
        RouterOutlet,
        PriceOverviewComponent,
        CurrencyPipe,
        NgForOf
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
