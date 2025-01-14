import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {RouterOutlet} from '@angular/router';
import { PriceOverviewComponent } from "../../../personal/price-overview/price-overview.component";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {UserPriceEntryTabComponent} from '../../components/user-price-entry-tab/user-price-entry-tab.component';
@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        ToolbarComponent,
        RouterOutlet,
        UserPriceEntryTabComponent
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
