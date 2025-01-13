import { Component, effect } from '@angular/core';
import { LikedProductsService } from '../../../services/liked-products.service';
import { Product } from '../../../_model/product';
import { ProductService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-favorite-user-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './favorite-user-products.component.html',
  styleUrl: './favorite-user-products.component.css',
  standalone: true
})
export class FavoriteUserProductsComponent {
  likedProducts: Product[] = [];
  orderQuantity: number = 1;
  selectedProduct: Product | null = null; 


 constructor (private productService: ProductService, private reservationService: ReservationService){
  this.reservationService.initialize('_USER');
  effect(() => {
    this.likedProducts = this.productService.pinnedByUserProducts();
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
