import { Inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, OrderItem } from '../_model/reservation';
import { Product } from '../_model/product';
import { Observable, timer } from 'rxjs';
import { PartyServiceService } from './party-service.service';
import axios from 'axios';
import { baseURL } from '../_config/config';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  timer = timer(0, 3000);
  UserOfService: string = '';
  draftOrder = signal<Order>({
    items: [],
    totalPrice: 0,
    paid: false,
    belongs_to: '',
  });  

  orders = signal<Order[]>([]);

  
  constructor(private partyService: PartyServiceService) {}

  initialize(usedBy: string): void {
    this.UserOfService = usedBy;

    if (this.UserOfService == '_PERSONAL') {
      this.timer.subscribe(() => {
        this.fetchAllOrders();
      });
    }

    if (this.UserOfService === '_USER') {
      const uuid = this.partyService.getUserUUID();
      if (uuid) {
        this.timer.subscribe(() => this.fetchOrdersOfUser(uuid));
      } else {
        console.error('UUID not available for the user');
      }
    }
  }

  getUserUUID(): string {
    return this.partyService.getUserUUID() ?? '';
  }

  async processPayment(orderId: string): Promise<void> {
    try {
      const partyId = this.partyService.getActivePartyId();
      const URL = `${baseURL}/${partyId}/guests/orders/${orderId}`;
      const response = await axios.post(URL);
  
      console.log('Payment processed successfully:', response.data);
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  }
  



  
private async fetchAllOrders(): Promise<void> {
  try {
    const partyId = this.partyService.getActivePartyId();
    const URL = `${baseURL}/${partyId}/guests/orders`;
    const response = await axios.get<Order[]>(URL);
    this.orders.set(response.data);
    console.log('Fetched all orders:', response.data);
  } catch (error) {
    console.error('Error fetching all orders:', error);
  }
}

// Fetch orders for a specific user '_USER'
private async fetchOrdersOfUser(uuid: string): Promise<void> {
  try {
    console.log("fetching with uuid:" + uuid);
    const URL = `${baseURL}/guests/orders?uuid=${uuid}`;
    const response = await axios.get<Order[]>(URL);
    this.orders.set(response.data);
    console.log('Fetched orders for user:', response.data);
  } catch (error) {
    console.error('Error fetching user orders:', error);
  }
}
 
  
  addToReservation(product: Product, quantity: number): void {
    const currentReservation = this.draftOrder();
    
    // Find the existing item in the reservation
    const existingItem = currentReservation.items.find(
      (item) => item.productId === product.id
    );
  
    // If the item exists, update its quantity and total item price
    if (existingItem) {
      existingItem.quantity = quantity;  // Set the new quantity instead of adding
      existingItem.totalItemPrice = existingItem.quantity * product.latestCalculatedPrice;
    } else {
      // If the item doesn't exist, add it as a new item
      currentReservation.items.push({
        productId: product.id!,
        productName: product.name,
        pricePerItem: product.latestCalculatedPrice,
        quantity,
        totalItemPrice: quantity * product.latestCalculatedPrice,
      });
    }
  
    // Recalculate the total price after updating the items
    currentReservation.totalPrice = this.calculateTotalPrice(currentReservation.items);
  
    // Update the reservation with the new data
    this.draftOrder.set({ ...currentReservation });
  }

  async createReservation(order: Order): Promise<any> {
    order.belongs_to = this.partyService.getUserUUID() ?? '';
    console.log("CREATE RESERVATION UUID IS:", order.belongs_to);

    try {
      const URL = baseURL + '/' + this.partyService.getActivePartyId() + '/guests/orders';
      const response = await axios.post(URL, order);

      console.log('Reservation created:', response.data);

      // Reset the draft order after successful creation
      this.resetDraftOrder();

      return response.data;
    } catch (error) {
      console.error('Error creating reservation:', error);
      throw error;
    }
  }

  resetDraftOrder(): void {
    this.draftOrder.set({
      items: [],
      totalPrice: 0,
      paid: false,
      belongs_to: '',
    });
    console.log('Draft order has been reset.');
  }

  

  

  public calculateTotalPrice(items: OrderItem[]): number {
    return items.reduce((sum, item) => sum + item.totalItemPrice, 0);
  }

}