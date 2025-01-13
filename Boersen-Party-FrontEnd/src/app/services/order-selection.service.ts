import { Injectable, signal, WritableSignal } from '@angular/core';
import { Order } from '../_model/reservation';

@Injectable({
  providedIn: 'root'
})
export class OrderSelectionService {
  selectedOrder: WritableSignal<Order | null> = signal(null);

  setSelectedOrder(order: Order): void {
    this.selectedOrder.set(order);
  }

  resetSelectedOrder() {
    this.selectedOrder.set(null);
  }
}
