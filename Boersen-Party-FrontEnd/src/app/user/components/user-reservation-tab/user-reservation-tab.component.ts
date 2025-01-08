import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order, OrderItem } from '../../../_model/reservation';
import { ReservationService } from '../../../services/reservation.service';


@Component({
  standalone:true,
  selector: 'app-user-reservation-tab',
  imports: [CommonModule],
  templateUrl: './user-reservation-tab.component.html',
  styleUrl: './user-reservation-tab.component.css'
})
export class UserReservationTabComponent {

  isExpanded = false;
  order: Order | undefined;
  orderItems: OrderItem[] = []; 

  constructor(private reservationService: ReservationService) {
    effect(() => {
      const reservation = this.reservationService.order();
      this.order = reservation;
      if (reservation) {
        this.orderItems = reservation.items; // Extract items from the reservation
      } else {
        this.orderItems = []; // Reset if no reservation exists
      }
    });
  }

  toggleTab(): void {
    this.isExpanded = !this.isExpanded;
  }

  createReservation() {
    if (this.orderItems.length > 0) {
      const newOrder: Order = {
        items: this.orderItems,
        totalPrice: this.reservationService.calculateTotalPrice(this.orderItems),
        isPaid: false, // Set the appropriate value for "isPaid"
        uuid: this.reservationService.order().uuid || '', //user uuid gets passed down in the partyService
      };

      this.reservationService.createReservation(newOrder);
    } else {
      console.log('No items in reservation to create.');
    }
  }


}
