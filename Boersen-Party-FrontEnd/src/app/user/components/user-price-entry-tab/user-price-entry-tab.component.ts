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
  products: Product[] = []; // Liste der Produkte
  selectedProduct: Product | null = null; // Aktuell ausgewähltes Produkt
  orderQuantity: number = 1; // Bestellmenge

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

    // Initialisiere Produkte und füge `liked` hinzu
    effect(() => {
      this.products = this.productService.products().map((product) => ({
        ...product,
        liked: product.liked ?? false, // Falls liked nicht existiert, setze false
      }));
    });
  }

  onHeartClick(event: Event, product: Product) {
    event.stopPropagation(); // Verhindert Popup-Anzeige
    product.liked = !product.liked; // Toggle liked
    this.updateProductOrder(); // Sortiere Produkte neu
  }

  updateProductOrder() {
    this.products.sort((a, b) => {
      if (a.liked && !b.liked) return -1;
      if (!a.liked && b.liked) return 1;
      return 0;
    });
  }

  onProductClick(product: Product) {
    if (!product.liked) {
      this.selectedProduct = product;
      console.log(`Produkt geklickt: ${product.name}`);
    }
  }

  closePopup() {
    console.log('Popup geschlossen.');
    this.selectedProduct = null;
    this.orderQuantity = 1;
  }

  addToOrder() {
    if (this.selectedProduct && this.orderQuantity > 0) {
      this.reservationService.addToReservation(this.selectedProduct, this.orderQuantity);
      console.log(`Hinzugefügt: ${this.orderQuantity} von ${this.selectedProduct.name}`);
      this.closePopup();
    } else {
      console.error('Ungültiges Produkt oder Menge');
    }
  }
}
