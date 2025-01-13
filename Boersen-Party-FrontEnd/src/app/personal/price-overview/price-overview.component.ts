import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { PriceEntryTabComponent } from "../../veranstalter/price-entry-tab/price-entry-tab.component";

@Component({
  standalone: true,
  selector: 'app-price-overview', // Since it's standalone
  imports: [CommonModule, PriceEntryTabComponent], // Add CommonModule here
  templateUrl: './price-overview.component.html',
  styleUrls: ['./price-overview.component.css']
})


export class PriceOverviewComponent {

}
