import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation, ReservationItem } from '../_model/reservation';
import { Product } from '../_model/product';
import { Observable } from 'rxjs';
import { PartyServiceService } from './party-service.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  constructor(private partyService: PartyServiceService) {
    this.reservationSignal = signal<Reservation>({
      items: [],
      totalPrice: 0,
      isPaid: false,
      user_uuid: this.partyService.getPartyGuestUuid() || '',
    });
  }
  
  private apiUrl = '/api/orders';

  private reservationSignal;

 

  getReservationSignal() {
    return this.reservationSignal.asReadonly();
  }


  addToReservation(product: Product, quantity: number): void {
    const currentReservation = this.reservationSignal();
    const existingItem = currentReservation.items.find(
      (item) => item.productId === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalItemPrice = existingItem.quantity * product.latestCalculatedPrice;
    } else {
      currentReservation.items.push({
        productId: product.id!,
        productName: product.name,
        pricePerItem: product.latestCalculatedPrice,
        quantity,
        totalItemPrice: quantity * product.latestCalculatedPrice,
      });
    }

    currentReservation.totalPrice = this.calculateTotalPrice(currentReservation.items);

    this.reservationSignal.set({ ...currentReservation });
  }

  
  //confirmReservation(): Observable<any> {
    //return this.http.post(`${this.apiUrl}/create`, this.reservationSignal());
  //}

  /**
   * Helper method to calculate the total price
   */
  private calculateTotalPrice(items: ReservationItem[]): number {
    return items.reduce((sum, item) => sum + item.totalItemPrice, 0);
  }

}
