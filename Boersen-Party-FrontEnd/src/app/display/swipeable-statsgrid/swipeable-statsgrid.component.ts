import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TrendingItemComponent } from '../trending-item/trending-item.component';
import { MonitorStatsComponent } from '../monitor-stats/monitor-stats.component';
import { EventsTabComponent } from "../events-tab/events-tab.component";
import { Product } from '../../_model/product';

@Component({
  selector: 'app-swipeable-statsgrid',
  standalone: true,
  imports: [TrendingItemComponent, MonitorStatsComponent, EventsTabComponent],
  templateUrl: './swipeable-statsgrid.component.html',
  styleUrl: './swipeable-statsgrid.component.css',
  
})
export class SwipeableStatsgridComponent {
    @Input() products: Product[] = [];
  
}
