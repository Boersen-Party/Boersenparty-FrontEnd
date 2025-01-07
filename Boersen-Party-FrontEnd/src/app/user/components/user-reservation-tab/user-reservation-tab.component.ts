import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  standalone:true,
  selector: 'app-user-reservation-tab',
  imports: [CommonModule],
  templateUrl: './user-reservation-tab.component.html',
  styleUrl: './user-reservation-tab.component.css'
})
export class UserReservationTabComponent {
  isExpanded = false;

  toggleTab(): void {
    this.isExpanded = !this.isExpanded;
  }
}
