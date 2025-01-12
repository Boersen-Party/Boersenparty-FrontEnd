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
  styleUrls: ['./user-price-entry-tab.component.css'],
})
export class UserPriceEntryTabComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  orderQuantity: number = 1;
  likedProducts: Record<number, boolean> = {};

  reservation: Order = {
    items: [],
    totalPrice: 0,
    paid: false,
    belongs_to: '',
  };

  constructor(
    private productService: ProductService,
    private reservationService: ReservationService
  ) {
    this.reservationService.initialize('_USER');

    effect(() => {
      this.products = this.productService.products();
      this.loadLikedStatus();
    });
  }

  onHeartClick(event: Event, product: Product) {
    event.stopPropagation();

    const productId = product.id ?? -1;
    this.likedProducts[productId] = !this.likedProducts[productId];
    this.saveLikedStatus();
    this.updateProductOrder();
  }

  updateProductOrder() {
    this.products.sort((a, b) => {
      const aId = a.id ?? -1;
      const bId = b.id ?? -1;

      const aLiked = this.likedProducts[aId] || false;
      const bLiked = this.likedProducts[bId] || false;

      if (aLiked && !bLiked) return -1;
      if (!aLiked && bLiked) return 1;
      return 0;
    });
  }

  onProductClick(product: Product) {
    const productId = product.id ?? -1;
    if (!this.likedProducts[productId]) {
      this.selectedProduct = product;
      console.log(`Product clicked: ${product.name}`);
    }
  }

  closePopup() {
    this.selectedProduct = null;
    this.orderQuantity = 1;
  }

  addToOrder() {
    if (this.selectedProduct && this.orderQuantity > 0) {
      this.reservationService.addToReservation(this.selectedProduct, this.orderQuantity);
      this.closePopup();
    }
  }

  trackByProductName(index: number, product: Product): string {
    return product.name;
  }

  loadLikedStatus() {
    const storedLikedProducts = localStorage.getItem('likedProducts');
    if (storedLikedProducts) {
      this.likedProducts = JSON.parse(storedLikedProducts);
    }
  }

  saveLikedStatus() {
    localStorage.setItem('likedProducts', JSON.stringify(this.likedProducts));
  }
}
