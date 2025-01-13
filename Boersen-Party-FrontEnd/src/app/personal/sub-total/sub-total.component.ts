import { Component, computed } from '@angular/core';
import { OrderSelectionService } from '../../services/order-selection.service';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-sub-total',
  standalone: true,
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
  export class SubTotalComponent {
    order = computed(() => {
      const selectedOrder = this.orderSelectionService.selectedOrder();
      console.log('Selected Order in SubTotalComponent:', selectedOrder); // Debug log to see the selected order
      return selectedOrder;
    });
  
    constructor(private orderSelectionService: OrderSelectionService,
                private reservationService: ReservationService) {}
  
    async processPayment() {
      const selectedOrder = this.order();
      if (!selectedOrder) {
        console.error('No order selected for payment.');
        return;
      }
  
      if (selectedOrder.id) {
        this.reservationService.processPayment(selectedOrder.id);
        this.resetOrder();
      } else {
        console.error('Order ID is undefined.');
      }
      
    }

    resetOrder() {
      this.orderSelectionService.resetSelectedOrder();
      console.log('Order reset in SubTotalComponent'); // Debug log
    }

  
  
  
  
  
  }

