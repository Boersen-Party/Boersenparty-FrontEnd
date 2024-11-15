import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-add-drink-item-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-drink-item-window.component.html',
  styleUrls: ['./add-drink-item-window.component.css']
})

export class AddDrinkItemWindowComponent {
  @Output() close = new EventEmitter<void>();

  // weil add-drink-item immer child von price-entry-tab ist, braucht es einen EventEmittler
  hideWindow() {
    console.log("Closing AddDrinkWindow");
    this.close.emit();

  }

}
