import { Component, effect } from '@angular/core';
import { Order } from '../../_model/reservation';
import { ReservationService } from '../../services/reservation.service';
import { OrderSelectionService } from '../../services/order-selection.service';
import { truncate } from 'node:fs/promises';

@Component({
  selector: 'app-reservation-list',
  standalone:true,
  imports: [],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {
  ManagedOrders: Order[] = [];
  selectedOrder?: Order;


  constructor(private reservationService: ReservationService, private orderSelectionService: OrderSelectionService) {
      this.reservationService.initialize('_PERSONAL');
  
      effect(() => {
        this.ManagedOrders = this.reservationService.orders().filter(order => order.paid === false);
  console.log('PERSONALER orders updated (only unpaid): ', this.ManagedOrders);

      });
    }
      
    selectOrder(order: Order): void {
      if (order.id) {
        this.orderSelectionService.setSelectedOrder(order);
        console.log('Selected Order:', order);
      } else {
        console.error('Order ID is missing:', order);
      }
    }


}
