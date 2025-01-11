import { Component, effect } from '@angular/core';
import { Order } from '../../_model/reservation';
import { ReservationService } from '../../services/reservation.service';
import { OrderSelectionService } from '../../services/order-selection.service';

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
        this.ManagedOrders = this.reservationService.orders();
        console.log("PERSONALER orders updated: ", this.ManagedOrders);
      });
    }

    selectOrder(order: Order): void {
      this.orderSelectionService.setSelectedOrder(order);
      console.log('Selected Order:', order);
    }


}
