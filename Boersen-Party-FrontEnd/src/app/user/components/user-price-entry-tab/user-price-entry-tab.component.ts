import { Component, effect } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../../_model/reservation';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  standalone: true,
  selector: 'app-user-price-entry-tab',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-price-entry-tab.component.html',
  styleUrl: './user-price-entry-tab.component.css',
  
})
export class UserPriceEntryTabComponent {
  products: Product[] = []; // List of products to display
  selectedProduct: Product | null = null; // Currently selected product
  orderQuantity: number = 1; // Quantity for the selected product

  reservation: Order = {
    items: [],
    totalPrice: 0,
    isPaid: false,
    belongs_to: '', 
  };

  constructor(
    private productService: ProductService,
    private reservationService: ReservationService ) {
    
      this.reservationService.initialize('_USER');
    effect(() => {
      this.products = this.productService.products();
    });
  }

 
  
  onProductClick(product: Product) {
    this.selectedProduct = product;
    console.log(`Product clicked: ${product.name}`);
  }

  
  closePopup() {
    console.log('Popup closed.');
    this.selectedProduct = null;
    this.orderQuantity = 1; 
  }

  addToOrder() {
    if (this.selectedProduct && this.orderQuantity > 0) {
      this.reservationService.addToReservation(this.selectedProduct, this.orderQuantity);
      console.log(`Added ${this.orderQuantity} of ${this.selectedProduct.name} to the reservation.`);
      this.closePopup(); 
    } else {
      console.error('Invalid product or quantity');
    }
  }


}
