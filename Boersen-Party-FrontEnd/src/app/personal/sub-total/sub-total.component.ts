import { Component, computed } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';
import { OrderSelectionService } from '../../services/order-selection.service';

@Component({
  selector: 'app-sub-total',
  standalone: true,
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
  export class SubTotalComponent {
    order = computed(() => this.orderSelectionService.selectedOrder());
  
    constructor(private orderSelectionService: OrderSelectionService) {}
  }

