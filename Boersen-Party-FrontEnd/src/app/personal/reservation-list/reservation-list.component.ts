import { Component, effect } from '@angular/core';
import { Order } from '../../_model/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  standalone:true,
  imports: [],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {
  ManagedOrders: Order[] = [];

  constructor(private reservationService: ReservationService) {
      this.reservationService.initialize('_PERSONAL');
  
     effect(() => {
        this.ManagedOrders = this.reservationService.orders();
        console.log("PERSONALER orders updated: ", this.ManagedOrders);
      });
    }



}
