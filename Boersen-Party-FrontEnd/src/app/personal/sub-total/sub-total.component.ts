import { Component, computed } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';
import { OrderSelectionService } from '../../services/order-selection.service';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-sub-total',
  standalone: true,
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
  export class SubTotalComponent {
    order = computed(() => this.orderSelectionService.selectedOrder());
  
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
    }
  
  
  
  
  
  }

