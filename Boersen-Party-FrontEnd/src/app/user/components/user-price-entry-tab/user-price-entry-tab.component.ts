import { Component, effect } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../../_model/reservation';
import { ReservationService } from '../../../services/reservation.service';
import { LikedProductsService } from '../../../services/liked-products.service';

@Component({
  standalone: true,
  selector: 'app-user-price-entry-tab',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-price-entry-tab.component.html',
  styleUrl: './user-price-entry-tab.component.css',
  
})
export class UserPriceEntryTabComponent {
  products: Product[] = []; // List of products to display
  //selectedProduct: Product | null = null; // Currently selected product
  //orderQuantity: number = 1; // Quantity for the selected product

  constructor(
    private productService: ProductService,
    private likedProductsService:LikedProductsService ) {
    
    effect(() => {
      this.products = this.productService.products();
    });
  }

 

  togglePin(product: Product) {
    console.log('Pin icon clicked for product:', product.name);
    const productId = product.id!;

    if (this.likedProductsService.isProductPinned(productId)) {
      console.log('Product is already pinned. Unpinning it...');
      this.likedProductsService.removePinnedProduct(productId);
    } else {
      console.log('Product is not pinned. Pinning it...');
      this.likedProductsService.addPinnedProduct(productId);
    }
  }
  




}
