import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order, OrderItem } from '../../../_model/reservation';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  standalone:true,
  selector: 'app-user-reservation-tab',
  imports: [CommonModule],
  templateUrl: './user-reservation-tab.component.html',
  styleUrl: './user-reservation-tab.component.css',
})
export class UserReservationTabComponent {

  isExpanded = false;
  order: Order | undefined;
  orderItems: OrderItem[] = [];

  users_uuid: string = '';
  constructor(private reservationService: ReservationService) {
    this.reservationService.initialize('_USER');
    effect(() => {
      const reservation = this.reservationService.draftOrder();
      this.order = reservation;
      if (reservation) {
        this.orderItems = reservation.items;
      } else {
        this.orderItems = [];
      }
    });

    this.users_uuid = this.reservationService.getUserUUID();
  }

  toggleTab(): void {
    this.isExpanded = !this.isExpanded;
  }

  createReservation() {
    if (this.orderItems.length > 0) {
      const newOrder: Order = {
        items: this.orderItems,
        totalPrice: this.reservationService.calculateTotalPrice(this.orderItems),
        paid: false,
      };

      this.reservationService.createReservation(newOrder);
      this.orderItems = [];
      console.log('Reservation created and items cleared.');
      this.order = undefined;



    } else {
      console.log('No items in reservation to create.');
    }
  }
}
