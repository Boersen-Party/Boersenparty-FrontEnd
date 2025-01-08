import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, OrderItem } from '../_model/reservation';
import { Product } from '../_model/product';
import { Observable } from 'rxjs';
import { PartyServiceService } from './party-service.service';
import axios from 'axios';
import { baseURL } from '../_config/config';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  order = signal<Order>({
    items: [],
    totalPrice: 0,
    isPaid: false,
    uuid: '',
  });  


  
  constructor(private partyService: PartyServiceService) {
    this.order.set({
      ...this.order(),
      uuid: this.partyService.getUserUUID() || '',
    });
  }

  

 
  
  addToReservation(product: Product, quantity: number): void {
    const currentReservation = this.order();
    
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
    this.order.set({ ...currentReservation });
  }

  async createReservation(order: Order): Promise<any> {
    order.uuid = this.partyService.getUserUUID() ?? '';
    console.log("CREATE RESERVATION UUID IS:", order.uuid);

    try {
      const URL = baseURL + '/' + this.partyService.getActivePartyId() + '/guests/orders';
      const response = await axios.post(URL, order);
      console.log('Reservation created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating reservation:', error);
      throw error;
    }
  }

  

  

  public calculateTotalPrice(items: OrderItem[]): number {
    return items.reduce((sum, item) => sum + item.totalItemPrice, 0);
  }

}
