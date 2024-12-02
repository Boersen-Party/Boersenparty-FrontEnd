import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TrendingItemComponent } from '../trending-item/trending-item.component';
import { MonitorStatsComponent } from '../monitor-stats/monitor-stats.component';
import { EventsTabComponent } from "../events-tab/events-tab.component";

@Component({
  selector: 'app-swipeable-statsgrid',
  imports: [TrendingItemComponent, MonitorStatsComponent, EventsTabComponent],
  templateUrl: './swipeable-statsgrid.component.html',
  styleUrl: './swipeable-statsgrid.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SwipeableStatsgridComponent {
}