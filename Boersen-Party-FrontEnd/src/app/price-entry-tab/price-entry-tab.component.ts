import { Component } from '@angular/core';
import {AddDrinkItemWindowComponent} from '../add-drink-item-window/add-drink-item-window.component';

@Component({
  standalone: true,
  selector: 'app-price-entry-tab',
  imports: [AddDrinkItemWindowComponent],
  templateUrl: './price-entry-tab.component.html',
  styleUrl: './price-entry-tab.component.css'
})
export class PriceEntryTabComponent {

  showAddDrinkWindow: boolean = false;

  onClick() {
    console.log("Button clicked!");
    this.showAddDrinkWindow = !this.showAddDrinkWindow;
  }

  closeWindow() {
    this.showAddDrinkWindow = false;
  }
}
