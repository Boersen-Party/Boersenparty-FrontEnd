import { Component } from '@angular/core';
import { ItemStatCardComponent } from './item-stat-card/item-stat-card.component';

@Component({
  selector: 'app-monitor-stats',
  standalone: true,
  imports: [ItemStatCardComponent],
  templateUrl: './monitor-stats.component.html',
  styleUrl: './monitor-stats.component.css'
})
export class MonitorStatsComponent {

}
